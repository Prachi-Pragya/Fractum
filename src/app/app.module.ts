import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FractumComponent } from './fractum/fractum.component';
import { ViewModule } from './view/view.module';


@NgModule({
  declarations: [
    AppComponent,
    FractumComponent,
   
  ],
  imports: [
    BrowserModule,ViewModule
  ],
  providers: [
    FactumserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
