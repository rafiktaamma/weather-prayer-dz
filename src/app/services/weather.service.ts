import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINTS } from 'src/app/utilities/ressources/endpoints';
import { APIKEY } from 'src/app/utilities/ressources/apikey';
import { WeatherDetails } from 'src/app/utilities/entities/weather-details';
import { WeatherForecast } from 'src/app/utilities/entities/weather-forecast';
import {WeatherOnecallDaily} from '../utilities/entities/weather-onecall-daily';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherByCityName(
    cityName: string
  ): Observable<WeatherDetails> {
    /*console.log('city name recived ' + cityName);*/
    return this.http.get<WeatherDetails>(
      `${ENDPOINTS.GET_BY_CITY_NAME + cityName + ',DZ'}&appid=${APIKEY.KEY}&lang=fr`
    );
  }

  getWeatherForecast(cityName: string): Observable<WeatherForecast> {
    return this.http.get<WeatherForecast>(
      `${ENDPOINTS.GET_BY_CITY_FORECAST + cityName + ',DZ'}&appid=${APIKEY.KEY}&lang=fr`
    );
  }

  getWeatherDaily(
    lon: string , lat: string
  ): Observable<WeatherOnecallDaily> {
    return this.http.get<WeatherOnecallDaily>(
      `${ENDPOINTS.GET_Weather_Daily + 'lon=' + lon + '&lat=' + lat + '&exclude=minutely'}&appid=${APIKEY.KEY}&lang=fr`
    );
  }

}
