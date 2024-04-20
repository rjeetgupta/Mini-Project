// const lightText = document.querySelector('.light-text')
// const sun = document.querySelector('.sun');

// function changeLightTheme() {
//     if (document.body.classList.contains('light-theme')) {
//         document.body.classList.remove('light-theme');
//         document.body.classList.add('dark-theme');
//         sun.src = 'assets/light-theme';
//         lightText.textContent = 'Light Theme';
//     } else {
//         document.body.classList.remove('dark-theme');
//         document.body.classList.add('light-theme');
//         sun.src = 'images/moon.png';
//         lightText.textContent = 'Dark Theme';
//     }

//     localStorage.setItem('theme', document.body.classList.contains('light-theme')? 'light' : 'dark');
// }

// lightText.addEventListener('click', changeLightTheme)
// sun.addEventListener('click', changeLightTheme);





const searchBtn = document.querySelector('.searchButton');
searchBtn.addEventListener('click', () => {
    
    console.log("clicked")
    const searchInput = document.querySelector('.search-input');

    const apiUrl = `https://api.github.com/users/${searchInput.value}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            updateDom(data);
            console.log(data);
        })
    
})

const updateDom =  (data) => {
    document.querySelector('.profilePic').src = data.avatar_url;

    document.querySelector('.name').textContent = data.name;

    document.querySelector('.date').textContent = data.date;

    const getDate = (inputDate) => {
        // Create a new Date object from the string
        const date = new Date(inputDate);

        // Options for formatting the date
        const options = { year: 'numeric', month: 'long', day: 'numeric' };

        // Format the date as "20 April 2024"
        return date.toLocaleDateString('en-US', options);
    }

    
    document.querySelector('.date').textContent = getDate(data.created_at);

    document.querySelector('.at').textContent = getDate(data.updated_at);

    document.querySelector('.bio').textContent = data.bio;

    document.querySelector('.repo-value').textContent = data.public_repos;

    document.querySelector('.followers-value').textContent = data.followers;

    document.querySelector('.following-value').textContent = data.following;

    document.querySelector('.location-value').textContent = data.location;

    const twitterLink = data.twitter_username;

    if (twitterLink) {
        document.querySelector('.twitter-link').textContent = twitterLink;
    } else {
        document.querySelector('.twitter-link').textContent = 'Not available';
    }
        


    // if (twitterUrl) {
    //     console.log(twitterUrl);
    //     // twitterUrl.textContent = data.twitter_username;
    //     // twitterUrl.href = `https://twitter.com/${data.twitter_username}`;
    // }
    

    document.querySelector('.profile-url').href = data.html_url;
}