async function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const weatherInfo = document.getElementById('weatherInfo');
    const city = cityInput.value;

    if (!city) {
        weatherInfo.innerHTML = 'Please enter a city name';
        return;
    }

    try {
        console.log(city);
        const apiKey ='8bb204ff7e5f95cc13863580c2a36072';
        const response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (response.ok) {
            weatherInfo.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        } else {
            weatherInfo.innerHTML = data.error || 'An error occurred while fetching weather data';
        }
    } catch (error) {
        console.error('Error:', error);
        weatherInfo.innerHTML = 'An error occurred while fetching weather data';
    }
}



// Add event listener to the button
document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

