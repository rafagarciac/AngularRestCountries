import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  private country:  Array<object> = [];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService) { }

  ngOnInit() {
    this.getCountry();
  }

  getCountry(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.apiService.getCountryByName(name).subscribe((data: Array<object>) => {
      console.log(data[0])
      this.country = data;
    });
  }

  // O B J E C T  - M E T H O D S - C O U N T R Y 
  getNameCountry(): string {
    return this.country[0]['name']
  }
  getTopLevelDomainCountry(): Array<Object> {
    let arrayTopLevelDomains = []
    for (let i = 0; i < this.country[0]['topLevelDomain'].length; i++) {
      arrayTopLevelDomains.push(this.country[0]['topLevelDomain'][i])
    }
    return arrayTopLevelDomains
  }
  getRegionCountry(): string {
    return this.country[0]['region']
  }
  getSubRegionCountry(): string {
    return this.country[0]['subregion']
  }
  getAlpha2CodeCountry(): string { 
    return this.country[0]['alpha2Code']
  }
  getAlpha3CodeCountry(): string {
    return this.country[0]['alpha3Code']
  }
  getCallingCodes(): Array<Object> {
    let arrayCallingCodes = []
    for (let i = 0; i < this.country[0]['callingCodes'].length; i++) {
      arrayCallingCodes.push(this.country[0]['callingCodes'][i])
    }
    return arrayCallingCodes
  }
  getCapital(): string {
    return this.country[0]['capital']
  }
  getAltSpellings(): Array<Object> {
    let arrayAltSpellings = []
    for (let i = 0; i < this.country[0]['altSpellings'].length; i++) {
      arrayAltSpellings.push(this.country[0]['altSpellings'][i])
    }
    return arrayAltSpellings
  }
  getPopulation() {
    return this.country[0]['population']
  }
  getLatLng(): Array<Object> {
    let arrayLatLng = []
    for (let i = 0; i < this.country[0]['latlng'].length; i++) {
      arrayLatLng.push(this.country[0]['latlng'][i])
    }
    return arrayLatLng
  }
  getDemonym(): string {
    return this.country[0]['demonym']
  }
  getArea() {
    return this.country[0]['area']
  }
  getGini() {
    return this.country[0]['gini']
  }
  getTimeZones(): Array<Object> {
    let arrayTimeZones = []
    for (let i = 0; i < this.country[0]['timezones'].length; i++) {
      arrayTimeZones.push(this.country[0]['timezones'][i])
    }
    return arrayTimeZones
  }
  getBorders(): Array<Object> {
    let arrayBorders = []
    for (let i = 0; i < this.country[0]['borders'].length; i++) {
      arrayBorders.push(this.country[0]['borders'][i])
    }
    return arrayBorders
  }
  getNativeName(): string {
    return this.country[0]['nativeName']
  }
  getNumericCode(): string {
    return this.country[0]['numericCode']
  }
  getCurrencies(): Array<Object> {
    return JSON.stringify(this.country[0]['currencies']).replace('[{', '').replace('}]', '').split(',')
  }
  getLanguages(): Array<Object> {
    return JSON.stringify(this.country[0]['languages']).replace('[{', '').replace('}]', '').split(',')
  }
  getTranslations(): Array<Object> {
    return JSON.stringify(this.country[0]['translations']).replace('{', '').replace('}', '').split(',')
  }
  getFlag(): string {
    return this.country[0]['flag']
  }
  getRegionalBlocs(): Array<Object> {
    return JSON.stringify(this.country[0]['translations']).replace('{', '').replace('}', '').split(',')
  }
  getCioc(): string {
    return this.country[0]['cioc']
  }

}
