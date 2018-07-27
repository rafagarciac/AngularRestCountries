import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class ApiService {
  API_URL = "https://restcountries.eu/rest/v2";
  constructor(private httpClient: HttpClient) { }

  getAllCountries() {
    return this.httpClient.get(`${this.API_URL}/all`)
  }

}
