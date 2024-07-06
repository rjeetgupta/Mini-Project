const url = 'https://api.thecatapi.com/v1/images/search';
const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
let img; // Declare img variable globally to access it across functions

btn.addEventListener('click', () => {
    if (img) {
        container.removeChild(img); // Remove previous image if exists
    }
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data[0].url;
            img = createImageElement(imageUrl); // Create new image element
            container.appendChild(img); // Append new image to container
        })
        .catch(error => {
            console.error('Error fetching cat image:', error);
        });
});

function createImageElement(url) {
    const imgElement = document.createElement('img');
    imgElement.classList.add('cat', 'random_cats');
    imgElement.src = url;
    return imgElement;
}
