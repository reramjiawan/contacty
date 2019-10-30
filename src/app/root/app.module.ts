import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { IonicModule } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
