const axios = require(`axios`)

const mapsUrl = `https://maps.googleapis.com/maps/api/geocode/json`
const mapsKey = process.env.MAPS_KEY

const geocodeAddress = (address) => new Promise ((resolve, reject) => {
    const encodedAddress = encodeURIComponent(address)

    axios
        .get(`${mapsUrl}?address=${encodedAddress}&key=${mapsKey}`)
        .then(response => {
            const data = response.data
            
            if (data.status === `ZERO_RESULTS`)
                reject(`Unable to find that address`)
            
            if (data.status === `REQUEST_DENIED`)
                reject(`Request denied by Google Geocoding API, have you updated your Google Geocoding Key at .env file?`)

            if (data.status !== 'OK')
                reject(`Reqest returned with ${data.status} error from Google Geocoding API`)

            if (data.results != null && data.results.length > 0)
                resolve({
                    address: data.results[0].formatted_address,
                    lat: data.results[0].geometry.location.lat,
                    lng: data.results[0].geometry.location.lng
                })
        })
        .catch(e => {console.log(e)
            if (e.code === `ENOTFOUND`)
                reject(`Unable to connect to Google servers.`)
        })
})

module.exports = { geocodeAddress }