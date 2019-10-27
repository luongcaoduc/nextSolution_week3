const request = require('request')

const geocode = (callback) => {
    const url = 'https://www.google.com/'

    request({ url: url, json: true }, (error, res) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else {
            console.log(res)
        }
        // } else if (body.features.length === 0) {
        //     callback('Unable to find location. Try another search.', undefined)
        // } else {

        //     callback(undefined, {
        //         latitude: body.features[0].center[1],
        //         longitude: body.features[0].center[0],
        //         location: body.features[0].place_name
        //     })
        // }
    })
}