import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../models/city';
import { CountryWithCities } from '../models/country-with-cities';
import { Country } from '../models/country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryCityService {
baseUrl:string='http://localhost:5121';
private selectedCity:City|null=null;
  constructor(private http:HttpClient) { }
  getAllCountriesWithCities(){
    return this.http.get<CountryWithCities[]>(this.baseUrl+'/api/City/GetAllCountriesWithCities')
  }
  deleteCountryAndcityes(countryId:number){
    return this.http.delete<any>(this.baseUrl+`/api/City/DeleteCountryAndCities/${countryId}`)
  }
  addCountryCity(countryWithCities:CountryWithCities){
    return this.http.post<any>(this.baseUrl+'/api/City/AddCountryAndCities',countryWithCities)
  }
getCountry(countryId:number){
  return this.http.get<CountryWithCities>(this.baseUrl+`/api/City/GetCountryWithCitiesbyId/${countryId}`)
}

updateCountryCities(countryId:number,country:Country):Observable<CountryWithCities>{
  return this.http.put<CountryWithCities>(this.baseUrl+`/api/City/PutCountryAndCities/${countryId}`,country)
}

}
