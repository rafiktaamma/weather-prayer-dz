import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {WeatherDetails} from '../utilities/entities/weather-details';
import {Subscription} from 'rxjs';
import {WeatherService} from '../services/weather.service';
import {WeatherOnecallDaily} from '../utilities/entities/weather-onecall-daily';
import {PrayerTime} from '../utilities/entities/prayer-time';
import {PrayerService} from '../services/prayer.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-weatherhome',
  templateUrl: './weatherhome.component.html',
  styleUrls: ['./weatherhome.component.css']
})

export class WeatherhomeComponent implements OnInit, OnDestroy  {
  title = 'WeatherPrayerAlgeria';
  cityName = 'saida';
  param1 = 'raha khawya ';
  indexedArray: {[key: number]: string} = {
    1 :	'Adrar',
    2 :	'Chlef',
    3 :	'Laghouat',
    4 :	'Oum El Bouaghi',
    5 :	'Batna',
    6 :	'Bejaia',
    7 :	'Biskra',
    8 :	'Bechar',
    9 :	'Blida',
    10 :	'Bouira',
    11 :	'Tamanrasset',
    12 :	'Tebessa',
    13 :	'Tlemcen',
    14 :	'Tiaret',
    15 :	'Tizi Ouzou',
    16 :	'Alger',
    17 :	'Djelfa',
    18 :	'Jijel',
    19 :	'Setif',
    20 :	'Saida',
    21 :	'Skikda',
    22 :	'Sidi Bel Abbes',
    23 :	'Annaba',
    24 :	'Guelma',
    25 :	'Constantine',
    26 :	'Medea',
    27 :	'Mostaganem',
    28 :	'MSila',
    29 :	'Mascara',
    30 :	'Ouargla',
    31 :	'Oran',
    32 :	'El Bayadh',
    33 :	'Illizi',
    34 :	'Bordj Bou Arreridj',
    35 :	'Boumerdes',
    36 :	'El Tarf',
    37 :	'Tindouf',
    38 :	'Tissemsilt',
    39 :	'El Oued',
    40 :	'Khenchela',
    41 :	'Souk Ahras',
    42 :	'Tipaza',
    43 :	'Mila',
    44 :	'Ain Defla',
    45 :	'Naama',
    46 :	'Ain Temouchent',
    47 :	'Ghardaia',
    48 :	'Relizane'
  };
  x = 0;
  numbers;
  isLoading = true;
  hasNoCity = false;
  weatherDetail: WeatherDetails;
  weatherOneCall: WeatherOnecallDaily = null ;
  weatherForecast: WeatherDetails[];
  weatherSubscription: Subscription;
  forecastSubscription: Subscription;
  OneCallSubscription: Subscription;
  prayertime: PrayerTime;
  prayerSubscription: Subscription;
  // TODO: TIMELINE FOR WEATHER
  constructor(private weatherService: WeatherService, private prayerService: PrayerService, private route: ActivatedRoute) {
    this.numbers = Array(7).fill(1).map((x, i) => i + 1);
  }


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (Number(params.city) >= 1 && Number(params.city) <= 48) {
      this.cityName = this.indexedArray[Number(params.city)];
      console.log(this.cityName);
      if (this.cityName != null) {
        console.log('city not null');
        this.getPrayerByCityName();
        this.getWeatherByCityName();
      }
      if (this.cityName === undefined) {
        this.cityName = 'saida';
        this.getPrayerByCityName();
        this.getWeatherByCityName();
      }
    } else {
        this.hasNoCity = true;
        this.isLoading = false;
      }
    });
  }




  getPrayerByCityName() {
    this.prayerSubscription = this.prayerService
      .getPrayerByCityName(this.cityName)
      .subscribe(
        (prayer: PrayerTime) => {
          /*this.isLoading = false;
          this.hasNoCity = false;*/
          this.prayertime = prayer;
          console.log(this.prayertime);
        },
        error => {
          this.isLoading = false;
          this.hasNoCity = true;
        }
      );
  }

  getWeatherByCityName() {
    this.weatherSubscription = this.weatherService
      .getWeatherByCityName(this.cityName)
      .subscribe(
        (cityWeather: WeatherDetails) => {
          /*this.isLoading = false;
          this.hasNoCity = false;*/
          this.weatherDetail = cityWeather;
          this.getWeatherDailyOneCall();

        },
        error => {
          this.isLoading = false;
          this.hasNoCity = true;
        }
      );
  }

  /* getWeatherByForecast() {
     this.isLoading = true;
     this.forecastSubscription = this.weatherService
       .getWeatherForecast(this.cityName)
       .subscribe(
         (cityWeather: WeatherForecast) => {
           this.isLoading = false;
           this.hasNoCity = false;
           this.weatherForecast = cityWeather.list;
           this.getWeatherByCityName();
         },
         error => {
           this.isLoading = false;
           this.hasNoCity = true;
         }
       );
   }*/

  getWeatherDailyOneCall() {
    /*console.log('one call function');*/
    const lon = this.weatherDetail.coord.lon.toString();
    const lat = this.weatherDetail.coord.lat.toString();
    /*console.log(lon + ' ' + lat);*/
    this.OneCallSubscription = this.weatherService.getWeatherDaily(lon, lat).subscribe(
      (weatheronecall: WeatherOnecallDaily) => {
        /*console.log('service done correctly ');
        console.log(weatheronecall);*/
        this.weatherOneCall = weatheronecall;
        this.isLoading = false;
      },
      error => {
        console.log('error');
      }
    );
  }

  ngOnDestroy() {
    console.log(this.param1);
    console.log(this.weatherDetail);
    if (this.weatherSubscription !== undefined ) {
      this.weatherSubscription.unsubscribe(); }
    }
  }


