// const sqlite3 = require('sqlite3')
// const path = require('path')
// const db = new sqlite3.Database(path.resolve('./sqlite.db'))

// const insertReading = (type, reading) => {
//     db.run(`INSERT INTO ${type} VALUES (datetime('now), ${reading});`)
// }

// const fetchLatestReading = (type, limit, callback) => {
//     db.all(`SELECT * FROM temperature ORDER BY createdAt DESC LIMIT ${limit}`, callback)
// }

// const fetchReadingsBetweenTime = (type, start, end, callback) => {
//     db.all(`SELECT * FROM temperature WHERE createdAt > ? AND createdAt < ?;`, [start, end], callback)
// }

// const getAverageOfReadingsBetweenTime = (type, start, end) => {
//     db.get(`SELECT avg(value) FROM temperature WHERE createdAt > ? AND createdAt < ?;`, [start, end], callback)
// }

// module.exports = {
//     insertReading,
//     fetchLatestReading,
//     fetchReadingsBetweenTime,
//     getAverageOfReadingsBetweenTime
// }