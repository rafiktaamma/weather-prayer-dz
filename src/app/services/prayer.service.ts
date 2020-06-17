import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINTS } from 'src/app/utilities/ressources/endpoints';
import {PrayerTime} from '../utilities/entities/prayer-time';

@Injectable({
  providedIn: 'root'
})
export class PrayerService {

  constructor(private http: HttpClient) { }

  getPrayerByCityName(
    cityName: string
  ): Observable<PrayerTime> {
    /*console.log('city name recived ' + cityName);*/
    return this.http.get<PrayerTime>(
      `${ENDPOINTS.GET_BY_PRAYER_CITY_NAME + cityName + '&country=algeria&method=3&tune=0,0,0,0,0,3,3,0'}`
    );
  }
}
