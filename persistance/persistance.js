function WeatherApi() {
  this.getWeatherApiData = (searchedCity) => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchedCity + "&units=metric&APPID=e5a46efb7eb8c41236961878afa2d0f9",
        type: "GET",
        success: function (data) {
          resolve(data);
        },
        error: function (error) {
          reject(error);
        }
      });
    });
  };
}