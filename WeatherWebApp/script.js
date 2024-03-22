const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const cityInput = document.getElementById('city').value; 
    console.log(cityInput);


    const apiKey = '923e18a28a2470165adde80359da30e1'
    // const apiUrl = `https://api.weatherapi.com/v1/current.json?key=438e6340a77e44ce85c145319240103&q=${cityInput}&aqi=no`;
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        updateDOM(data);

        console.log(data);

    } catch (error) {
        console.error("Error in fetching data", error);
        throw error;
    }
});


function updateDOM(data) {
    document.querySelector('.cityName').textContent = data.city.name;

    const icon = data.list[0].weather[0].icon;
    console.log(icon);
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const imageElement = document.querySelector('div img');
    imageElement.src = iconUrl;

    
    const weatherDescription = data.list[0].weather[0].description;
    document.querySelector('.description').textContent = weatherDescription;


    // Find temperature in celcius

    function getTempInCelsius(kelvin) {
        const celsius = (kelvin - 273.15).toFixed(2);
        return celsius;
    }

    const kelvin = data.list[0].main.temp;
    const celsius = getTempInCelsius(kelvin);
    document.querySelector('.temperature').textContent = celsius + '°C';

    const windSpeed = data.list[0].wind.speed;
    document.querySelector('.windSpeed').textContent = windSpeed + ' km/h';
      
    const humidity = data.list[0].main.humidity;
    document.querySelector('.humidity').textContent = humidity + ' mm';
        
    const pressure = data.list[0].main.pressure;
    document.querySelector('.pressure').textContent = pressure + ' mb';



    // function to generate date

    function getCurrentDate(timestamp) {
        const date = new Date(timestamp);
        
        const day = date.getDate();
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const monthIndex = date.getMonth(); // Month index (0-based)
        const month = monthNames[monthIndex]; // Get the abbreviated month name
        const year = date.getFullYear();
    
        const formattedDate = `${day} ${month} ${year}`;
        
        return formattedDate;
    }
    

    // second date from now

    // Convert dt to milliseconds
    const secondTimestamp = data.list[1].dt * 1000;
    const secondDate = getCurrentDate(secondTimestamp);
    document.querySelector('.second .day').textContent = secondDate;

    const secondIcon = data.list[1].weather[0].icon;
    console.log(secondIcon);
    const secondIconUrl = `https://openweathermap.org/img/wn/${secondIcon}@2x.png`;

    document.querySelector('.second img').src = secondIconUrl;

    const secondHighTemperature = ((data.list[1].main.temp_max) - 273.15).toFixed(2);
    document.querySelector('.second .high').textContent = secondHighTemperature;
    console.log(secondHighTemperature);
       
    const secondLowTemperature = ((data.list[1].main.temp_min) - 273.15).toFixed(2);
    document.querySelector('.second .low').textContent = secondLowTemperature;
    console.log(secondLowTemperature);


    // third days from now

    const thirdTimestamp = data.list[2].dt * 1000;
    const thirdDate = getCurrentDate(thirdTimestamp);
    document.querySelector('.third .day').textContent = thirdDate;

    const thirdIcon = data.list[2].weather[0].icon;

    const thirdIconUrl = `https://openweathermap.org/img/wn/${thirdIcon}@2x.png`;

    document.querySelector('.third img').src = thirdIconUrl;



    const thirdHighTemperature = ((data.list[2].main.temp_max) - 273.15).toFixed(2);
    document.querySelector('.third .high').textContent = thirdHighTemperature;

       
    const thirdLowTemperature = ((data.list[2].main.temp_min) - 273.15).toFixed(2);
    document.querySelector('.third .low').textContent = thirdLowTemperature;



    // fourth days from now

    const fourthTimestamp = data.list[3].dt * 1000;
    const fourthDate = getCurrentDate(fourthTimestamp);
    document.querySelector('.fourth .day').textContent = fourthDate;


    const fourthIcon = data.list[3].weather[0].icon;

    const fourthIconUrl = `https://openweathermap.org/img/wn/${fourthIcon}@2x.png`;

    document.querySelector('.fourth img').src = fourthIconUrl;


    const fourthHighTemperature = ((data.list[3].main.temp_max) - 273.15).toFixed(2);
    document.querySelector('.fourth .high').textContent = fourthHighTemperature;

       
    const fourthLowTemperature = ((data.list[3].main.temp_min) - 273.15).toFixed(2);
    document.querySelector('.fourth .low').textContent = fourthLowTemperature;


        // fifth days from now

    const fifthTimestamp = data.list[4].dt * 1000;
    console.log(fifthTimestamp)
    const fifthDate = getCurrentDate(fifthTimestamp);

    document.querySelector('.fifth .day').textContent = fifthDate;


    const fifthIcon = data.list[4].weather[0].icon;

    const fifthIconUrl = `https://openweathermap.org/img/wn/${fifthIcon}@2x.png`;

    document.querySelector('.fifth img').src = fifthIconUrl;



    const fifthHighTemperature = ((data.list[4].main.temp_max) - 273.15).toFixed(2);
    document.querySelector('.fifth .high').textContent = fifthHighTemperature;

        
    const fifthLowTemperature = ((data.list[4].main.temp_min) - 273.15).toFixed(2);
    document.querySelector('.fifth .low').textContent = fifthLowTemperature;
    

    // sixth days from now

    const sixthTimestamp = data.list[5].dt * 1000;
console.log(sixthTimestamp);
    const sixthDate = getCurrentDate(sixthTimestamp);

    document.querySelector('.sixth .day').textContent = sixthDate;


    const sixthIcon = data.list[5].weather[0].icon;

    const sixthIconUrl = `https://openweathermap.org/img/wn/${sixthIcon}@2x.png`;

    const img = document.querySelector('.sixth img').src = sixthIconUrl;


    const sixthHighTemperature = ((data.list[5].main.temp_max) - 273.15).toFixed(2);
    document.querySelector('.sixth .high').textContent = sixthHighTemperature;

        
    const sixthLowTemperature = ((data.list[5].main.temp_min) - 273.15).toFixed(2);
    document.querySelector('.sixth .low').textContent = sixthLowTemperature;

}
