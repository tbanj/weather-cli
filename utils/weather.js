const axios = require('axios');

module.exports = {
    methodToday: checkToday,
    methodTomorrow: checkTomorrow
}

async function checkToday(location) {
    
        let result;
        try {
            result = await axios({
                method:'get',
                
                url:`http://api.openweathermap.org/data/2.5/weather?q=${location.city},${location.country_code}&units=metric&APPID=0e277eb5936797c1db082cc2a34d16a4`
                // params: {
                //     format: JSON,
                //     q: `${location.city}, ${location.country_code}&APPID=0e277eb5936797c1db082cc2a34d16a4`
                // }
            });
            
        } catch (error) {
            console.error(error);
        }
        
        
        
        return result.data; 
}


async function checkTomorrow(location) {
    
    let resultTomorrow;
    try {
        resultTomorrow = await axios({
            method:'get',
            
            // url:`http://api.openweathermap.org/data/2.5/forecast?q=${location.city},${location.country_code}&NG&APPID=dcc0cc3d866d4152fe43d79fdee8bfad`
            
            url: `http://api.openweathermap.org/data/2.5/forecast/daily?q=${location.city},${location.country_code}&mode=json&cnt=3&units=metric&appid=c9d49310f8023ee2617a7634de23c2aa`
        });
        // console.log(resultTomorrow.data);
        
        
    } catch (error) {
        console.error(error);
    }
    
    
    
    return resultTomorrow.data; 
}

