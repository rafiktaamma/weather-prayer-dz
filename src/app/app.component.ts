import {Component, HostListener, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {WeatherDetails} from './utilities/entities/weather-details';
import {Subscription} from 'rxjs';
import {WeatherService} from './services/weather.service';
import {WeatherForecast} from './utilities/entities/weather-forecast';
import {WeatherOnecallDaily} from './utilities/entities/weather-onecall-daily';
import {PrayerTime} from './utilities/entities/prayer-time';
import {PrayerService} from './services/prayer.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {





  /*@HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    const element = document.querySelector('.navbar');
    if (window.pageYOffset > 10) {
      element.classList.add('nav_onScroll');
      element.classList.remove('py-lg-3');
      element.classList.add('py-lg-2');
    } else {
      element.classList.remove('nav_onScroll');
      element.classList.remove('py-lg-2');
      element.classList.add('py-lg-3');
    } }*/

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    const element = document.querySelector('.navbar');
    if (window.pageYOffset > 10) {
      element.classList.add('nav_onScroll');
      element.classList.remove('py-lg-3');
      element.classList.add('py-0');
      element.classList.add('border-asterism');
    } else {
      element.classList.remove('nav_onScroll');
      element.classList.remove('py-0');
      element.classList.remove('border-asterism');
      element.classList.add('py-lg-3');
    } }
}
