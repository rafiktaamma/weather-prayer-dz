import { BaseModel } from './base-model';

export interface WeatherDetails extends BaseModel {
  base: string;
  clouds: {
    all: number
  };
  cod: number;
  coord: {
    lat: number
    lon: number
  };
  dt: any;
  main: {
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
  };
  name: string;
  sys: {
    country: string
    id: number
    message: number
    sunrise: any
    sunset: any
    type: number
  };
  timezone: number;
  visibility: number;
  weather: [
    {
      description: string
      icon: string
      id: number
      main: string
    }
  ];
  wind: {
    deg: number
    speed: number
  };
}
