import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryCityService } from '../../services/country-city.service';
import { Country } from '../../models/country';
import { City } from '../../models/city';

@Component({
  selector: 'app-edit-country-city',
  templateUrl: './edit-country-city.component.html',
  styleUrl: './edit-country-city.component.css'
})
export class EditCountryCityComponent implements OnInit {
constructor(
  private router:Router,
  private route:ActivatedRoute,
  private service:CountryCityService
  ){}
  countryObj:Country={id:0,name:'',iso2:'',iso3:'',cities:[]}
  cityList:City[]=[];
cityObj:City={id:0,lot:'',lan:'',cid:0,name:''}
  ngOnInit(): void {
   this.route.paramMap.subscribe({
    next:(params)=>{
      const id=params.get('id');
      if(id){
        this.service.getCountry(Number(id)).subscribe({
          next:(res)=>{
            this.cityList=res.cities;
            this.countryObj={
              id:res.country.id,
              iso2:res.country.iso2,
              name:res.country.name,
              iso3:res.country.iso3,cities:this.cityList
            }
          }
        })
      }
    },
   });
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
  updateCountryCity(){
    this.service.updateCountryCities(this.countryObj.id,this.countryObj).subscribe({
      next:(response)=>{
        this.router.navigate(['displayCountry'])
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
