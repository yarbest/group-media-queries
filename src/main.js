const groupMediaQueries = () => {
    let str = ungrouped.value;

    let arr = [];

    str.replace(
        /(?<=@media (\((max|min)-width: \w+?px\)( (and|or) \((max|min)-width: \w+?px\))?) {\n).+?}(?=\s+})/gis,
        (match, group1, group2) => {
            let obj = {};
            Object.defineProperty(obj, group1, {
                // в group1 лежит медиа-условие, вот такое (max-width: число_px)
                value: match,
                writable: true,
                enumerable: true,
                configurable: true,
            });
            arr.push(obj);
        }
    );
    // console.log(arr);
    //тут будут лежать все медиа запросы именно этой ширины, но еще не сгруппированные, вот так:
    //"@media (max-width: 480px) { ...... }"
    //"@media (max-width: 480px) { ...... }"

    let resultMax360 = [];
    let resultMax480 = [];
    let resultMax575 = [];
    let resultMax767 = [];
    let resultMax991 = [];
    let resultMax1199 = [];
    let resultMin1200 = [];
    let otherResults = {}; //это объект, так как в виде ключа нам нужно хранить, какая именно ширина у запроса, а в виде значение объекта хранится css-правила для этого медиа-запроса

    //заполняем предыдущие массивы
    arr.forEach((obj) => {
        if (Object.keys(obj)[0] === '(max-width: 480px)') resultMax480.push(Object.values(obj));
        else if (Object.keys(obj)[0] === '(max-width: 360px)') resultMax360.push(Object.values(obj));
        else if (Object.keys(obj)[0] === '(max-width: 575px)') resultMax575.push(Object.values(obj));
        else if (Object.keys(obj)[0] === '(max-width: 767px)') resultMax767.push(Object.values(obj));
        else if (Object.keys(obj)[0] === '(max-width: 991px)') resultMax991.push(Object.values(obj));
        else if (Object.keys(obj)[0] === '(max-width: 1199px)') resultMax1199.push(Object.values(obj));
        else if (Object.keys(obj)[0] === '(min-width: 1200px)') resultMin1200.push(Object.values(obj));
        else {
            //если такой медиа запрос уже встречался, то нужно его дополнить, а не перезаписывать
            if (otherResults.hasOwnProperty(Object.keys(obj))) {
                otherResults[Object.keys(obj)] = otherResults[Object.keys(obj)] + '\n' + Object.values(obj)[0];
                return;
            }
            Object.defineProperty(otherResults, Object.keys(obj), {
                value: Object.values(obj)[0],
                writable: true,
                enumerable: true,
                configurable: true,
            });
        }
    });
    //в эти массивы будут складываться css-правила, подходящего медиа-запроса
    let groupedMax360 = ['@media (max-width: 360px) {\n'];
    let groupedMax480 = ['@media (max-width: 480px) {\n'];
    let groupedMax575 = ['@media (max-width: 575px) {\n'];
    let groupedMax767 = ['@media (max-width: 767px) {\n'];
    let groupedMax991 = ['@media (max-width: 991px) {\n'];
    let groupedMax1199 = ['@media (max-width: 1199px) {\n'];
    let groupedMin1200 = ['@media (min-width: 1200px) {\n'];

    //массивы, для не частых брейк поинтов
    let maxWidthBetween320and360 = [];
    let maxWidthBetween360and480 = [];
    let maxWidthBetween480and575 = [];
    let maxWidthBetween575and767 = [];
    let maxWidthBetween767and991 = [];
    let maxWidthBetween991and1199 = [];
    let maxWidthMoreThan1199 = [];

    for (let media in otherResults) {
        //в media лежат в таком виде (max-width: 850px) and (min-width: 767px)
        if (media.slice(1, 4) === 'max') {
            let widthNumber = +media.match(/\d+(?=px)/)[0]; //

            if (widthNumber > 320 && widthNumber < 360) maxWidthBetween320and360.push(`@media ${media} {\n${otherResults[media]}\n}`);
            else if (widthNumber > 360 && widthNumber < 480) maxWidthBetween360and480.push(`@media ${media} {\n${otherResults[media]}\n}`);
            else if (widthNumber > 480 && widthNumber < 575) maxWidthBetween480and575.push(`@media ${media} {\n${otherResults[media]}\n}`);
            else if (widthNumber > 575 && widthNumber < 767) maxWidthBetween575and767.push(`@media ${media} {\n${otherResults[media]}\n}`);
            else if (widthNumber > 767 && widthNumber < 991) maxWidthBetween767and991.push(`@media ${media} {\n${otherResults[media]}\n}`);
            else if (widthNumber > 991 && widthNumber < 1199)
                maxWidthBetween991and1199.push(`@media ${media} {\n${otherResults[media]}\n}`);
            else if (widthNumber > 1199) maxWidthMoreThan1199.push(`@media ${media} {\n${otherResults[media]}\n}`);
            //else {} для отрицательных!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        }
    }
    maxWidthBetween320and360 = maxWidthBetween320and360.join('\n\n');
    maxWidthBetween360and480 = maxWidthBetween360and480.join('\n\n');
    maxWidthBetween480and575 = maxWidthBetween480and575.join('\n\n');
    maxWidthBetween575and767 = maxWidthBetween575and767.join('\n\n');
    maxWidthBetween767and991 = maxWidthBetween767and991.join('\n\n');
    maxWidthBetween991and1199 = maxWidthBetween991and1199.join('\n\n');
    maxWidthMoreThan1199 = maxWidthMoreThan1199.join('\n\n');

    //формируем строку сгруппированного медиа-запроса
    const groupMedia = (ungrouped, futureGrouped) => {
        ungrouped.forEach((str) => futureGrouped.push(str + '\n'));
        futureGrouped.push('}');
        futureGrouped = futureGrouped.join('');
        return futureGrouped;
    };

    groupedMax360 = groupMedia(resultMax360, groupedMax360);
    groupedMax480 = groupMedia(resultMax480, groupedMax480);
    groupedMax575 = groupMedia(resultMax575, groupedMax575);
    groupedMax767 = groupMedia(resultMax767, groupedMax767);
    groupedMax991 = groupMedia(resultMax991, groupedMax991);
    groupedMax1199 = groupMedia(resultMax1199, groupedMax1199);
    groupedMin1200 = groupMedia(resultMin1200, groupedMin1200);

    //складываем все в общую строку
    let full = `${groupedMin1200} \n\n ${maxWidthMoreThan1199} \n\n ${groupedMax1199} \n\n ${maxWidthBetween991and1199} \n\n ${groupedMax991} \n\n ${maxWidthBetween767and991} \n\n ${groupedMax767} \n\n ${maxWidthBetween575and767} \n\n ${groupedMax575} \n\n ${maxWidthBetween480and575} \n\n ${groupedMax480} \n\n ${maxWidthBetween360and480} \n\n ${groupedMax360} \n\n ${maxWidthBetween320and360}`;

    //убираем все мадиа-запросы из оригинала, и в конец добавляем свои
    str = str.replace(/@media \(((max|min)-width: \w+?px)\)( (and|or) \((max|min)-width: \w+?px\))? {\n.+?}\n}/gis, '');
    str = str + full;
    // console.log(str);
    grouped.innerHTML = `<pre>${str}</pre>`;
};

// groupMediaQueries();

btn.addEventListener('click', groupMediaQueries);
