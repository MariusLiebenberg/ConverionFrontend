import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component/header.component";
import {TemperatureConversionComponent} from "./header/header.component/temperature/temperatureConversion.component";
import {HttpClientModule} from "@angular/common/http";
import {DistanceConversionComponent} from "./header/header.component/distance/distanceConversion.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TemperatureConversionComponent,
    DistanceConversionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
