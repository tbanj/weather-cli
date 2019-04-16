const axios = require('axios');
module.exports = async ()=> {
    const results = await axios({
        method: 'get',
        url: 'https://api.ipdata.co?api-key=067b2f67eda5bfd710abb2685c24a3b2367b17ca00ac9a540a1aa97f',
    })

    const { city, region} = results;
    return {
        city: city,
        country_code: country_code,
    };
}