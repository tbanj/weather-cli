const ora = require('ora');

const getWeather = require('../utils/weather');

const getLocation = require('../utils/location');


module.exports = async (args) => {
    const spinner = ora().start();
    
    try {
        const location = args.location || args._l || await getLocation();
        // const weather = await getWeather(location);
        const weather = await getWeather.methodToday(location);
        // console.log(weather);
        
        


        spinner.stop();
        
        console.log(`current conditions in ${location.city}, ${location.country_code}: ${weather.weather[0].description}`);
  
        console.log(`\tmin. temp today is ${weather.main.temp_min}C & max. temp is likely to be ${weather.main.temp_max}C`);
        
    } catch (error) {
        console.error(error);
        
    }
}