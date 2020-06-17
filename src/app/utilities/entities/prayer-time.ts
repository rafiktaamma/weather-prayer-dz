import { BaseModel } from './base-model';

export interface PrayerTime extends BaseModel {

  data: {
    timings: {
      Fajr: string,
      Sunrise: string,
      Dhuhr: string,
      Asr: string,
      Sunset: string,
      Maghrib: string,
      Isha: string,
      Imsak: string,
      Midnight: string
    };

  };
}
