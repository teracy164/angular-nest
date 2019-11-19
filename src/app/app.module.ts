import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiModule, Configuration, ConfigurationParameters } from './api-client';
import { HttpClientModule } from '@angular/common/http';

export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    basePath: '/api'
  }
  return new Configuration(params);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    ApiModule.forRoot(apiConfigFactory),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
