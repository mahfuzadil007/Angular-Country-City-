import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayCountryCityComponent } from './components/display-country-city/display-country-city.component';
import { AddCountryCityComponent } from './components/add-country-city/add-country-city.component';
import { EditCountryCityComponent } from './components/edit-country-city/edit-country-city.component';

const routes: Routes = [
  {path:'displayCountry',component:DisplayCountryCityComponent},
  {path:'country',component:AddCountryCityComponent},
  {path:'countryCity/edit/:id', component:EditCountryCityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
