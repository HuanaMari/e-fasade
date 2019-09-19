function DataLayer() {
    this.weatherApiData = {}
    this.persistanceObject = new WeatherApi();

    this.populateWeatherApiData = async (searchedCity) => {
        this.weatherApiData = await this.persistanceObject.getWeatherApiData(searchedCity);
    };

    this.getWeatherApiData = () => {
        return this.weatherApiData;
    };
}