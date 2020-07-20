const express = require('express');
const path = require('path');
const app = express();
const getCachedSensorReadings = require('./getCachedSensorReadings');

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/temperature', function(req, res) {
    res.send('<strong>' + 
    getCachedSensorReadings.getTemperature().toFixed(1) + 
    '</strong>' + '°C') 
    });

 app.get('/humidity', function(req, res) {
    res.send('<strong>' + 
    getCachedSensorReadings.getHumidity().toFixed(1) + 
    '</strong>' + '%') 
    });

app.get('/publlic', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3000, function() {
    console.log('Server listening on port 3000');
});