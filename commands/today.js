const ora = require('ora');

const weather = require('../utils/weather');
const getLocation = require('../utils/location');


module.exports = async (args) => {
    const spinner = ora().start();
    
    try {
        const location = await getLocation() || args._1 || await getLocation();
        const weather = getWeather(location);

        spinner.stop();
        
        console.log(`current conditions in ${location}:`);
        console.log(`\t${weather.weather.description}, ${weather.main.temp}`);
        
    } catch (error) {
        console.error(error);
    }
}