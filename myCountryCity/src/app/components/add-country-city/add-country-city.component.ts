import { Component } from '@angular/core';
import { CountryCityService } from '../../services/country-city.service';
import { Router } from '@angular/router';
import { Country } from '../../models/country';
import { City } from '../../models/city';
import { CountryWithCities } from '../../models/country-with-cities';

@Component({
  selector: 'app-add-country-city',
  templateUrl: './add-country-city.component.html',
  styleUrl: './add-country-city.component.css'
})
export class AddCountryCityComponent {
constructor(private service:CountryCityService,private router:Router){}
countryObj:Country={id:0,name:'',iso2:'',iso3:'',cities:[]}
cityList:City[]=[];
cityObj:City={id:0,lot:'',lan:'',cid:0,name:''}

addCountryCities(){
const countryWithcities:CountryWithCities={
  country:this.countryObj,
  cities:this.cityList
};
this.service.addCountryCity(countryWithcities).subscribe(
  (response)=>{
    console.log('Country and cities added successfully',response);
    this.countryObj={
      id:0,name:'',iso2:'',iso3:'',cities:[]
    }
    this.cityList=[];
    this.router.navigate([`displayCountry`])
  },
  (error)=>{
    console.error('Error occured',error)
  }
)
}
Addcities(){
if(this.cityObj.name!='' && this.cityObj.lot!='' && this.cityObj.lan!=''){
  const strExpobj=JSON.stringify(this.cityObj);
  const obj=JSON.parse(strExpobj);
  this.cityList.unshift(obj);
  this.cityObj={id:0,lot:'',lan:'',cid:0,name:''}
}
}
deleteCity(i:City,arr:any[]){
  const objarr=arr.findIndex((obj)=>obj.name==i.name);
  if(objarr>-1){
    arr.splice(objarr,1);
  }
}
}
