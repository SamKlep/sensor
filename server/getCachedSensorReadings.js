const getSensorReadings = require('./getSensorReadings');

// const databaseOperations = require('./databaseOperations');

const cache = {
    temperature: null,
    humidity: null
}

setInterval(() => {
    getSensorReadings((err, temperature, humidity) => {
        if(err) {
            return console.error(err)
        }
        // databaseOperations.insertReading('dhtreadings', temperature)
        // databaseOperations.insertReading('dhtreadings', humidity)
        cache.temperature = temperature;
        cache.humidity = humidity;
    })
}, 2000);

module.exports.getTemperature = () => cache.temperature
module.exports.getHumidity = () => cache.humidity