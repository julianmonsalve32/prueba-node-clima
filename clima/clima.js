const axios = require('axios');

const getClima = async(lat, long) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a124e588b9d5e1bb05fbe8372897b097&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}