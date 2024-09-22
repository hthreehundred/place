function addParameter(param, value){

    const url = new URL(window.location.href);

    url.searchParams.set(param, value);

    window.location.href = url;

    const params = new URLSearchParams(window.location.search);

    const name = params.get('name');


    if (name) {
        const element = document.querySelector('.list');
        element.style.display = 'block';
    }
}