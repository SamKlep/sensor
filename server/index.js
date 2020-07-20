const express = require('express');
const app = express();
const getSensorReadings = require('./getSensorReadings');
const sensor = require('node-dht-sensor');

app.get('/temperature', function(req, res) {
    getSensorReadings((err, temperature, humidity) {
        if(!err) {
            res.send(temperature.toFixed(1) + '°C');
        }
        
    });
});

app.get('/humidity', function(req, res) {
    getSensorReadings((err, temperature, humidity) {
        if(!err) {
            res.send(humidity.toFixed(1) + '°C');
        }
        
    });
});

app.listen(3000, function() {
    console.log('Server listening on port 3000');
});