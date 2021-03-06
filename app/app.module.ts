import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {WeatherComponent} from './weather-widget/component/weather.component';

import {SpeedUnitPipe} from './weather-widget/pipe/speed-unit.pipe';
import {TempUnitPipe} from './weather-widget/pipe/temp-unit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SpeedUnitPipe,
    TempUnitPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
