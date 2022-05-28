const request = require('postman-request');

const forecast = (lat, lng, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=64c6b202da959510c25e3150a925a0c3&query=${lat},${lng}&units=m`;
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable accesses to weather app', undefined);
        } else if (body.error) {
            callback('Unable to find this location', undefined);
        } else {
            const current = body.current;
            const location = body.location;
            callback(undefined, {current, location});
        }
    })
}


module.exports = forecast;
