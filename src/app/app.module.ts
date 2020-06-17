import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { CelsiusPipe } from 'src/app/utilities/pipes/celsius/celsius.pipe';
import { WeatherIconPipe } from 'src/app/utilities/pipes/weather-icon/weather-icon.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {RouterModule} from '@angular/router';
import { WeatherhomeComponent } from './weatherhome/weatherhome.component';
import { AppRoutingModule } from './app-routing.module';
import { CitysearchComponent } from './citysearch/citysearch.component';
import {FormsModule} from '@angular/forms';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';


registerLocaleData(localeFr);
@NgModule({
  declarations: [
    AppComponent,
    CelsiusPipe,
    WeatherIconPipe,
    WeatherhomeComponent,
    CitysearchComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule
  ],

  providers: [{provide: LOCALE_ID, useValue: 'fr'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
