// require("./callMock");
// const axios = require("axios");

// const { BASE_URL } = require("./baseUrl");

function cityWeather(city) {
  // Use console.log within the cityWeather function for debugging.
  // Use the &q= prefix with the city parameter at the end of the URL in order to mock the data correctly.
  console.log(city)

  return new Promise((resolve, reject) => {
    if (typeof city !== 'string') {
      throw reject('not a string')
    }
    // Implement the function - call http request
    resolve(object_to_be_returned);
    // Implement the function
  });
}

module.exports = {
  cityWeather,
};

console.log(cityWeather(null))