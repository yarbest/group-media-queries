const groupMediaQueries = () => {
    let str = ungrouped.value;
    let arr = [];
    let arrWithMaxMedia = []; //тут лежат запросы, у которых значение max-width, это еше не сгруппированные
    let arrWithMinMedia = [];
    //если запрос составной (max-width: 855px) and (min-width: 400px), то при определении в какой массив его отправить, будет смотреться на первую скобку

    let groupedQueriesWithMaxWidth = [];
    let groupedQueriesWithMinWidth = [];

    let result = [];

    //формируем 2 массива, один с maw-width, другой с min-width
    str.replace(
        /(?<=@media (\((max|min)-width: \w+?px\)( (and|or) \((max|min)-width: \w+?px\))?)\s?{\n).+?}(?=\s+})/gis,
        (match, group1, group2) => {
            let obj = {};
            obj[group1] = match; // в group1 лежит медиа-условие, вот такое (max-width: число_px), в group2 - либо max, либо min
            group2 === 'max' ? arrWithMaxMedia.push(obj) : arrWithMinMedia.push(obj);
        }
    );

    //сортируем медиа запросы по убыванию
    arrWithMaxMedia.sort((a, b) => +Object.keys(b)[0].match(/\d+(?=px)/) - +Object.keys(a)[0].match(/\d+(?=px)/));
    //в a и b лежат объекты, из их ключей получаем значение ширины в медиа-запросе //нужно определить, чья ширина больше, для простоты, представим что в a и b передаются именно ширины//допустим есть массив из разных ширин [444, 555, 777, 222]//сначала в функцию идут 444 и 555 как а и b соответственно, мы от b отнимаем a (можно и на оборот, тогда сортировка буте по возрастанию), и получаем положительное число,//а если функция получает положительное число, то она в массиве поставит b раньше чем а //в итоге массив становится таким : [555, 444, 777, 222]//дальше вместо а берется 444 а вместо b - 777, производим вычисление b - a и получаем положительное число,//значит в массиве элемент b будет стоять раньше чем а, в итоге получаем массив: [555, 777, 444, 222]// дальше вместо а берется 444 а вместо b - 222, производим вычисление b - a и получаем Отрицательное число,//а если получаем отрицательное число, то элемент а будет стоять в массиве раньше чем b, в итоге массив осталься такой же: [555, 777, 444, 222]//затем сортировка начинается опять, с первого элемента: 777 - 555 = >0 , значит 777 будет стоять раньше чем 555, получаем: [777, 555, 444, 222], и так далее
    //в кратце, если функция возвращает >0 то а правее b, если возвращает <0, то а левее b, если =0, то ничего не меняется
    //я как всегда все перепутал в массиве [333, 444, 222], сначала вместо а и b будут не 333 и 444, а наоборот, 444 и 333, тоесть а - это следующий элемент, а не текущий
    //a-b по возрастанию, b-a по убыванию
    arrWithMinMedia.sort((a, b) => +Object.keys(b)[0].match(/\d+(?=px)/) - +Object.keys(a)[0].match(/\d+(?=px)/));

    //Группируем одинаковые медиа запросы, но составные запросы сразу идут в результат, без группировки
    arrWithMaxMedia.forEach((item, i, arr) => {
        //если текущий объект имеет в себе составной запрос, то его группировать не надо и он сразу идет в результат
        if (/and|or/.test(Object.keys(arr[i])[0])) {
            groupedQueriesWithMaxWidth.push(arr[i]);
            return;
        }

        if (arr[i] === arr[0]) return; //если в первом объекте находится не составной запрос, то нужно его пропустить,
        //так как ниже по коду, текущий объект, берет значение предыдущего, а для первого объекта нету предыдущего, так как он самый первый

        //если предыдущий объект хранит в себе составной запрос, то его значение брать не надо, так как составные запросы не группируем
        if (/and|or/.test(Object.keys(arr[i - 1])[0])) return;

        //если ширина медиа запроса у двух соседних объектов сходится, то нужно их объединить
        if (Object.keys(arr[i])[0].match(/\d+(?=px)/)[0] === Object.keys(arr[i - 1])[0].match(/\d+(?=px)/)[0]) {
            arr[i][Object.keys(arr[i])[0]] = Object.values(arr[i])[0] + '\n' + Object.values(arr[i - 1])[0]; //добавляем в конец текущего объекта значение предыдущего
        }
        //в значение текущего объекта, в конец дописываем значение предыдущего объекта, допустим есть 3 объекта,
        //a, b, и c, объект b добавляет себе значения объекта a, затем объект c добавляет себе значение объекта b,
        //в котором уже лежат значения объекта a, соответственно в объекте c лежат значения объекта а и b
        //затем объект c идет в результат

        //если объект последний или после него идет объект с другой шириной в медиа запросе, то этот объект идет в результат, так как в нем уже все сгруппированно для этой ширины
        if (
            arr[i] === arr[arr.length - 1] ||
            Object.keys(arr[i])[0].match(/\d+(?=px)/)[0] !== Object.keys(arr[i + 1])[0].match(/\d+(?=px)/)[0]
        ) {
            groupedQueriesWithMaxWidth.push(arr[i]);
        }
    });

    arrWithMinMedia.forEach((item, i, arr) => {
        if (/and|or/.test(Object.keys(arr[i])[0])) {
            groupedQueriesWithMinWidth.push(arr[i]);
            return;
        }
        if (arr[i] === arr[0]) return;
        if (/and|or/.test(Object.keys(arr[i - 1])[0])) return;

        if (Object.keys(arr[i])[0].match(/\d+(?=px)/)[0] === Object.keys(arr[i - 1])[0].match(/\d+(?=px)/)[0]) {
            arr[i][Object.keys(arr[i])[0]] = Object.values(arr[i])[0] + '\n' + Object.values(arr[i - 1])[0];

            if (
                arr[i] === arr[arr.length - 1] ||
                Object.keys(arr[i])[0].match(/\d+(?=px)/)[0] !== Object.keys(arr[i + 1])[0].match(/\d+(?=px)/)[0]
            ) {
                groupedQueriesWithMinWidth.push(arr[i]);
            }
        }
    });

    //подготавливаем готовую строку, проходим по массивам, и собираем из них уже сгруппированные запросы,  сначала в результат идет массив, в котором запросы через min-width
    groupedQueriesWithMinWidth.forEach((item) => result.push(`@media ${Object.keys(item)[0]} {\n${Object.values(item)[0]}\n}\n`));

    groupedQueriesWithMaxWidth.forEach((item) => result.push(`@media ${Object.keys(item)[0]} {\n${Object.values(item)[0]}\n}\n`));

    result = result.join('\n');
    result = str.replace(/@media (\((max|min)-width: \w+?px\)( (and|or) \((max|min)-width: \w+?px\))?)\s?{\n.+?}\s+}/gs, '') + result;
    console.log(result);
};

btn.addEventListener('click', groupMediaQueries);
