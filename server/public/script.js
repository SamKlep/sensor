const fetchTemperature = () => {
    fetch('/temperature')
    .then(results => {
        return results.text()
    })
    .then(text => {
        const temperatureDisplay = 
        document.getElementById('temperature-display');
        temperatureDisplay.innerHTML = text;
    })
}

const fetchHumidity = () => {

    fetch('/humidity')
    .then(results => {
        return results.text()
    })
    .then(text => {
        const temperatureDisplay = 
        document.getElementById('humidity-display');
        temperatureDisplay.innerHTML = text;
    })
}

setInterval(() => {
    fetchTemperature();
    fetchHumidity();
}, 2000)