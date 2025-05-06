function fetchWeather() {
    let city = document.getElementById("cityInput").value.trim();
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "weather.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let weatherData = JSON.parse(xhr.responseText);
            if (weatherData[city]) {
                let data = weatherData[city];
                document.getElementById("weatherResult").innerHTML =
                    `<h3>${city}</h3>
                     <p>Temperature: ${data.temperature}</p>
                     <p>Humidity: ${data.humidity}</p>
                     <p>Condition: ${data.condition}</p>`;
            } else {
                document.getElementById("weatherResult").innerHTML = `<p>City not found in local database.</p>`;
            }
        }
    };
    xhr.send();
}
