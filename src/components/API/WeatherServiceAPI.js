import axios from 'axios';

// date - текущая дата. Не реализовано, т. к. используется тестовый сервер с определенным набором данных

export default class WeatherService {

    static async getWeekData(date = "weekWeather") {
        try {
            const url = "https://my-json-server.typicode.com/HerbalTea312/weather/db/data/" + date
            const response = await axios.get(url);
            return ([...response.data]);
        } catch (error) {
            console.log(error);
        }

    }

    static async getDayDetails(date = "dayWeather") {
        try {
            const url = "https://my-json-server.typicode.com/HerbalTea312/weather/db/data/" + date
            const response = await axios.get(url);
            return (response.data);
        } catch (error) {
            console.log(error);
        }
    }

    static async getCityItems() {
        try {
            const response = await axios.get("https://my-json-server.typicode.com/HerbalTea312/weather/db/data/cities");
            return (response.data);
        } catch (error) {
            console.log(error);
        }
    }
}