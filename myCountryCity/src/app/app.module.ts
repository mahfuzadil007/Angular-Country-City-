import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCountryCityComponent } from './components/add-country-city/add-country-city.component';
import { DisplayCountryCityComponent } from './components/display-country-city/display-country-city.component';
import { EditCountryCityComponent } from './components/edit-country-city/edit-country-city.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCountryCityComponent,
    DisplayCountryCityComponent,
    EditCountryCityComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
