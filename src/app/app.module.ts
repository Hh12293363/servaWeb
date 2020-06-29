import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerifyModule } from './verify/verify.module';
import { MainModule } from './main/main.module';
import { BaseInterceptor } from './base-interceptor';
import { LineSeriesService, ChartModule } from '@syncfusion/ej2-angular-charts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    VerifyModule,
    MainModule,
    AppRoutingModule,
    // ChartModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true },
    // LineSeriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
