import axios from 'axios';

export default class WeatherService {
    static async getWeekData() {
        const response = await axios.get("https://my-json-server.typicode.com/HerbalTea312/weather/db/data/dayWeather");
    }

    static async getDayDetails() {
        const response = await axios.get("https://my-json-server.typicode.com/HerbalTea312/weather/db/data/weekWeather");
    }
}