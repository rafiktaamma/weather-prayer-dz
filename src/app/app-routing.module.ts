import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {WeatherhomeComponent} from './weatherhome/weatherhome.component';
import {CitysearchComponent} from './citysearch/citysearch.component';

const routes: Routes = [
  {path: 'home', component: CitysearchComponent},
  {path: 'search', component: WeatherhomeComponent},
  /*{ path: '**'   , component: CitysearchComponent  },*/
  { path: '**',   redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
