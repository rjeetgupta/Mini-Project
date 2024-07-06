const newJoke = document.getElementById('getJokeBtn');

newJoke.addEventListener('click', function () {
    const url = 'https://v2.jokeapi.dev/joke/Any?type=single';
    fetch(url)
    .then(response => response.json())
    .then(data => {
            const joke = data.joke;
            document.getElementById('jokeContainer').innerHTML = joke;
        })
    .catch(error => console.log(error));
})