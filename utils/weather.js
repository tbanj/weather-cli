const axios = require('axios');

module.exports = async (location) => {
    const result = await axios({
        method:'get',
        url:'http://api.openweathermap.org/data/2.5/weather',
        params: {
            format: JSON,
            q: `${location.city}, ${location.country_code}&APPID=0e277eb5936797c1db082cc2a34d16a4`
        }
    });
    
    return result;
}