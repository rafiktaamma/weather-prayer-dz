import {BaseModel} from './base-model';

export interface WeatherOnecallDaily extends  BaseModel {

  lat: number;
  lon: number;
  current: {
    dt: any
    temp: number
    feels_like: number
    pressure: number
    humidity: number
    wind_speed: number
    wind_deg: number
    weather: [
      {
        id: number
        main: string
        description: string
        icon: string
      }
    ]
  };
  hourly: [{
    dt: any
    temp: number
    feels_like: number
    pressure: number
    humidity: number
    wind_speed: number
    wind_deg: number
    weather: [
      {
        id: number
        main: string
        description: string
        icon: string
      }
    ]
  }];
  daily: [
    {
      dt: any
      sunrise: Date
      sunset: Date
      temp: {
        day: number
        min: number
        max: number
        night: number
        eve: number
        morn: number
      },
      feels_like: {
        day: number
        night: number
        eve: number
        morn: number
      },
      pressure: number
      humidity: number

      wind_speed: number
      wind_deg: number
      weather: [
        {
          id: number
          main: string
          description: string
          icon: string
        }
      ],

    },

  ];
}

