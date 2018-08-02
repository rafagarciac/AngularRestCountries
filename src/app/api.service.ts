import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class ApiService {
  API_URL = "https://restcountries.eu/rest/v2";
  constructor(private httpClient: HttpClient) { }

  
  //Return a All Country List 
  getAllCountries() {
    return this.httpClient.get(`${this.API_URL}/all`)
  }

  //Return a Country Object
  getCountryByName(name){
    name = this.nameParticuliarities(name)
    console.log(this.API_URL + '/name/' + name)
    return this.httpClient.get(`${this.API_URL}/name/${name}`)
  }

  // Particularities with CountryName in the url
  nameParticuliarities(name) : string {
    let returnName = name
    switch (name) {
      case 'Cocos Keeling Islands':
        returnName = "cocos"
        break;
    
      default:
      returnName = returnName.replace(' ', '%20')
        break;
    }
    return returnName
  }

}
