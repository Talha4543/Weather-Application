async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const zip = document.getElementById("zipInput").value;

    let url = "/weather?";
    if (city) url += `city=${city}`;
    else if (zip) url += `zip=${zip}`;
    else {
        alert("Please enter city or ZIP code!");
        return;
    }

    const res = await fetch(url);
    const data = await res.json();

    if (data.error) {
        alert(data.error);
        return;
    }

    displayWeather(data);
}

async function getWeatherByLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (pos) => {
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;

            const res = await fetch(`/weather?lat=${lat}&lon=${lon}`);
            const data = await res.json();

            if (data.error) {
                alert(data.error);
                return;
            }

            displayWeather(data);
        });
    } else {
        alert("Geolocation not supported by your browser");
    }
}

function displayWeather(data) {
    document.getElementById("weatherCard").classList.remove("d-none");
    document.getElementById("cityName").innerText = `${data.city}, ${data.country}`;
    document.getElementById("description").innerText = data.description;
    document.getElementById("temperature").innerText = data.temperature;
    document.getElementById("humidity").innerText = data.humidity;
    document.getElementById("wind").innerText = data.wind;
    document.getElementById("weatherIcon").src = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;
}
