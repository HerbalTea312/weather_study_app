import axios from 'axios';

export default class WeatherService {
    static async getWeekData() {
        try {
            const response = await axios.get("https://my-json-server.typicode.com/HerbalTea312/weather/db/data/weekWeather");
            return ([...response.data]);
        } catch (error) {
            console.log(error);
        }

    }

    static async getDayDetails() {
        try {
            const response = await axios.get("https://my-json-server.typicode.com/HerbalTea312/weather/db/data/dayWeather");
            return (response.data);
        } catch (error) {
            console.log(error);
        }
    }
}