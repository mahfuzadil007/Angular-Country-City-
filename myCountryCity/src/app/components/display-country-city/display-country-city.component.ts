import { Component, OnInit } from '@angular/core';
import { CountryCityService } from '../../services/country-city.service';
import { Router } from '@angular/router';
import { CountryWithCities } from '../../models/country-with-cities';
import { City } from '../../models/city';

@Component({
  selector: 'app-display-country-city',
  templateUrl: './display-country-city.component.html',
  styleUrl: './display-country-city.component.css'
})
export class DisplayCountryCityComponent implements OnInit {
constructor(private service:CountryCityService, private router:Router){}
countryList:CountryWithCities[]=[];
citylist:City[]=[];
  ngOnInit(): void {
    this.getAllCountriesWithCities();
  }
  getAllCountriesWithCities(){
    this.service.getAllCountriesWithCities().subscribe(
     (data)=>
     {
        this.countryList=data.map((item)=>({
          country:item.country,
          cities:item.cities,
        }));
     },
     (error)=>{
      console.log(error)
     }
    )
  }
  deleteCountryCity(countryId:number){
    this.service.deleteCountryAndcityes(countryId).subscribe({
      next:(res)=>{
        let currentUrl=this.router.url;
        this.router.navigateByUrl('/',{skipLocationChange:true})
        .then(()=>{
          this.router.navigate([currentUrl]);
        })
      }
    })
  }
}
