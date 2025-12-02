const API_KEY = 'ff52142c100799a8f14d98a0594801ed'
const URL = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImg = document.querySelector(".weather_icon");

const checkWeather = async (city) => {
    const response = await fetch(URL + city + `&appid=${API_KEY}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = 'block';
        document.querySelector(".weather").style.display = 'none';
    }
    else {
        let data = await response.json();

        document.querySelector(".city_name").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + 'km/hr';

        if (data.weather[0].main == 'Clouds') {
            weatherImg.src = './images/clouds.png';
        }
        else if (data.weather[0].main == 'Clear') {
            weatherImg.src = './images/clear.png';
        }
        else if (data.weather[0].main == 'Rain') {
            weatherImg.src = './images/rain.png';
        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherImg.src = './images/drizzle.png';
        }
        else if (data.weather[0].main == 'Mist') {
            weatherImg.src = './images/mist.png';
        }
        document.querySelector(".weather").style.display = 'block';
        document.querySelector(".error").style.display = 'none';
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value)
});

