require(`dotenv`).config()
const yargs = require(`yargs`)

const geocode = require(`./geocode/geocode.js`)
const weather = require(`./weather/weather.js`)

const argv = yargs
    .options({
        address: {
            alias: `a`,
            demand: true,
            descibe: `Address to fetch weather for`,
            string: true
        }
    })
    .help()
    .alias(`help`, `h`)
    .alias(`version`, `v`)
    .argv

const address = argv.address.trim()

geocode
    .geocodeAddress(address)
    .then(geocodeResults => {
        weather
            .getWeather(geocodeResults.lat, geocodeResults.lng)
            .then(temperature => {
                console.log(`Temperatura agora em ${geocodeResults.address} é ${temperature.temperature}°C (${temperature.apparentTemperature}°C aparente)`)
            })
            .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
