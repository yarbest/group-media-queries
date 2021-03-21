const showResponse = (response) => {
    console.log(response);
};

const makeRequest = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://jsonplaceholder.typicode.com/posts`);
    xhr.send();
    xhr.addEventListener('load', () => {
        let response = JSON.parse(xhr.responseText);
        showResponse(response);
    });
};

// makeRequest();
