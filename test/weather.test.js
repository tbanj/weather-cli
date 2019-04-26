const expect = require('chai').expect;
const getLocation = require('../utils/location');

const getWeather = require('../utils/weather');

describe('Test Location API', () => {
    it('expect res type to equal object', () => {
      return getLocation().then(res => {
        locationInfo =res;
          expect(typeof res).to.equal('object');
      })
    });
    it('expect county code to be NG', () => {
      return getLocation().then(res => {
          expect(res.country_code).to.equal('NG');
      })
    });
    it('expect city to be Lagos', () => {
      return getLocation().then(res => {
          expect(res.city).to.equal('Lagos');
      })
    });
  });


  describe('Test Today Weather API', () => {
    it('expect res type to equal object', () => {
      return getWeather.methodToday(locationInfo).then(res => {
        // console.log(res);
          expect(typeof res).to.equal('object');
      })
    });
  
    it('expect weather description today to string', () => {
      return getWeather.methodToday(locationInfo).then(res => {
          expect(typeof res.weather[0].description).to.equal('string');
      })
    });
    it('expect min.temp to be of type number', () => {
      return getWeather.methodToday(locationInfo).then(res => {
          expect(typeof res.main.temp_min).to.equal('number');
      })
    });

    it('expect max.temp to be of type number', () => {
      return getWeather.methodToday(locationInfo).then(res => {
          expect(typeof res.main.temp_max).to.equal('number');
      })
    });
  });

  // getWeather.methodTomorrow(location)


  
  describe('Test Tomorrow Weather API', () => {
    it('expect res type to equal object', () => {
      return getWeather.methodTomorrow(locationInfo).then(res => {
        // console.log(res);
          expect(typeof res).to.equal('object');
      })
    });

    it('expect tomorrow date to be number', () => {
      return getWeather.methodTomorrow(locationInfo).then(res => {
          expect(typeof res.list[1].dt).to.equal('number');
      })
    });
    it('expect weather description tomorrow to be string', () => {
      return getWeather.methodTomorrow(locationInfo).then(res => {
          expect(typeof res.list[1].weather[0].description).to.equal('string');
      })
    });
    it('expect min.temp tomorrow to be of type number', () => {
      return getWeather.methodTomorrow(locationInfo).then(res => {
          expect(typeof res.list[1].temp.min).to.equal('number');
      })
    });

    it('expect max.temp tomorrow to be of type number', () => {
      return getWeather.methodTomorrow(locationInfo).then(res => {
          expect(typeof res.list[1].temp.max).to.equal('number');
      })
    });
  });


  
  describe('Test Two Days Ahead Weather API', () => {
    it('expect res type to equal object', () => {
      return getWeather.methodTomorrow(locationInfo).then(res => {
        // console.log(res);
          expect(typeof res).to.equal('object');
      })
    });

    it('expect two_days ahead which date should be number', () => {
      return getWeather.methodTomorrow(locationInfo).then(res => {
          expect(typeof res.list[2].dt).to.equal('number');
      })
    });
    it('expect weather description of two_days ahead to be string', () => {
      return getWeather.methodTomorrow(locationInfo).then(res => {
          expect(typeof res.list[2].weather[0].description).to.equal('string');
      })
    });
    it('expect min.temp of two_days_ahead of type number', () => {
      return getWeather.methodTomorrow(locationInfo).then(res => {
          expect(typeof res.list[2].temp.min).to.equal('number');
      })
    });

    it('expect max.temp of two_days_ahead  to be of type number', () => {
      return getWeather.methodTomorrow(locationInfo).then(res => {
          expect(typeof res.list[2].temp.max).to.equal('number');
      })
    });
  });