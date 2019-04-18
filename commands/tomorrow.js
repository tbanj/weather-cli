const ora = require('ora');

const getWeather = require('../utils/weather');


const getLocation = require('../utils/location');


module.exports = async (args) => {
    const spinner = ora().start();
    
    try {
        const location = args.location || args._l || await getLocation();
        
        const weatherTomorrow = await getWeather.methodTomorrow(location);
        spinner.stop();
       

        var dateTomorrow = new Date(weatherTomorrow.list[1].dt*1000);
        console.log(`Tomorrow date is  ${dateTomorrow}, temp. below`);
        console.log(`weather conditions in ${location.city}, ${location.country_code}: ${weatherTomorrow.list[1].weather[0].description}`);
        console.log(`\tmin. temp will be ${weatherTomorrow.list[1].temp.min}C  & max. temp will be ${weatherTomorrow.list[1].temp.max}C`);
        spinner.stop();
        
       
    } catch (error) {
        console.error(error);
    }
}