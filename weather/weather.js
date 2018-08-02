const axios = require(`axios`)

const darkskyKey = process.env.DARKSKY_KEY
const darkskyUrl = `https://api.darksky.net/forecast/${darkskyKey}`

const getWeather = (lat, lng) => new Promise ((resolve, reject) => {
    axios
        .get(`${darkskyUrl}/${lat},${lng}/?lang=pt&units=si`)
        .then(response => {
            const data = response.data
            
            resolve({ 
                temperature: data.currently.temperature,
                apparentTemperature: data.currently.apparentTemperature
            })
        })
        .catch(e => {
            if (e.code === `ENOTFOUND`)
                reject(`Unable to connect to DarkSky servers.`)

            reject(e.response.data.error)
        })
})

module.exports = { getWeather }