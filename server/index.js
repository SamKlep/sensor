const express = require('express');
const path = require('path');
const app = express();
const getCachedSensorReadings = require('./getCachedSensorReadings');
const colors = require('colors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
// const databaseOperations = require('./databaseOperations');

dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Body parser
app.use(express.json());

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/temperature', function(req, res) {
    res.json({
        value: 
        getCachedSensorReadings.getTemperature().toFixed(1)
    }) 
    });

    app.get('/humidity', function(req, res) {
        res.json({
            value: 
            getCachedSensorReadings.getHumidity().toFixed(1)
        }) 
        });

// app.get('/temperature/history', function(req, res) {
//     databaseOperations.fetchLatestReadings('temperature', 10, (err, results) => {
//         if (err) {
//         console.error(err)
//         return res.status(500).end()
//     }
//     res.json(results.reverse())
// })
// })

// app.get('/humidity/history', function(req, res) {
//     databaseOperations.fetchLatestReadings('humidity', 10, (err, results) => {
//         if (err) {
//         console.error(err)
//         return res.status(500).end()
//     }
//     res.json(results.reverse())
// })
// })

const server = app.listen(
    PORT,
    console.log(`Server running on port ${PORT}`.yellow.bold)
  );

  // Handle unhandled 
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message.red}`);
    // Close server and exit process
    server.close(() =>process.exit(1));
});