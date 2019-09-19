function BusinessLayer() {
    this.dataObject = new DataLayer();
  
    this.resolveWeatherApiData = async (searchedCity) => {
      await this.dataObject.populateWeatherApiData(searchedCity);
      var data = this.dataObject.getWeatherApiData();
   
    var modifiedWeatherInfo = {
        mainInfo: data.weather[0].main,
        weatherIcon: data.weather[0].icon,
        currentTemp: data.main.temp,
        currentCity: data.name
    }
    return modifiedWeatherInfo;
    }
}
