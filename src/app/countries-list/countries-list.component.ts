import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {
  private countries:  Array<object> = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getCountries();
  }

  public getCountries () {
    this.apiService.getAllCountries().subscribe((data: Array<object>) => {
      this.countries = data;
      for (let i = 0; i < this.countries.length; i++) {
        console.log(i + ' -'  + this.countries[i]['name']);
      }
    });
  }

  getValidPath (name): string {
    // Include your Fail Url Matches Character 
    let matchFailsUrl = ['(', ')'];
    for (let i = 0; i < matchFailsUrl.length; i++) {
      name = name.replace(matchFailsUrl[i], '');      
    }
    return name
  } 

}
