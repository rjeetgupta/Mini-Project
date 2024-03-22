// Select the search button element
const btn = document.getElementById('btn');

// Add event listener to the button
btn.addEventListener('click', async function() {
    // Get the username from the input field
    const username = document.getElementById('username').value;

    // Construct the API URL with the username
    const apiUrl = `https://api.github.com/users/${username}`;

    try {
        // Fetch data from the GitHub API
        const response = await fetch(apiUrl);

        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Failed to fetch GitHub details');
        }

        // Parse the JSON response
        const data = await response.json();

        // Update the DOM with the fetched data
        updateDOM(data);

    } catch (error) {
        console.error('Fetching data failed:', error.message);
        // Display an error message to the user
        alert('Failed to fetch GitHub details. Please try again later.');
    }
});

// Function to update the DOM with user data
function updateDOM(data) {
    const nameElement = document.getElementById('name');
    nameElement.innerText = data.name;

    const locationElement = document.getElementById('location');
    locationElement.innerText = data.location;

    const photoElement = document.getElementById('photo');
    photoElement.src = data.avatar_url;

    const followersElement = document.getElementById('followers');
    followersElement.innerText = data.followers;

    const followingsElement = document.getElementById('followings');
    followingsElement.innerText = data.following;

    const repoElement = document.getElementById('repo');
    repoElement.innerText = data.public_repos;

    const date = new Date(data.created_at)
    const createDateElement = document.getElementById('createDate');
    createDateElement.innerText = date.toDateString();

    // Log user details
    console.log('User details:', data);
}
