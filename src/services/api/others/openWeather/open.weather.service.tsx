import axios from 'axios';

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface WeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

const baseUrl: string = 'https://api.openweathermap.org/data/2.5/';
const apiKey = '263013e97c3356a7d5c3b3af4695d1e5';

export class OpenWeatherService {
  static async getData(city: string): Promise<any> {
    try {
      const response = await axios.get<WeatherResponse>(
        `${baseUrl}weather?q=${city}&appid=${apiKey}`,
      );

      if (response.data.cod !== 200) {
        console.error('Error getting data', response.data);
        return null;
      }

      return response.data;
    } catch (error) {
      console.error('Error getting data', error);
      return null;
    }
  }

  static async getTemperature(city: string): Promise<number> {
    const weatherData = await this.getData(city);
    const temperature = this.convertKelvinToCelsius(
      weatherData['main']['temp'],
    );
    return temperature;
  }

  static async weatherCondition(city: string): Promise<string> {
    try {
      const weatherData = await this.getData(city);
      const weatherCondition = weatherData.weather[0].main;
      return weatherCondition;
    } catch (error) {
      console.error('Error getting data', error);
      return null;
    }
  }

  static convertKelvinToCelsius(kelvin: number): number {
    const data = kelvin - 273.15;
    return parseFloat(data.toFixed(2));
  }
}
