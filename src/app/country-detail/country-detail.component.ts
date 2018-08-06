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
  
  //--------------------------------------------- 
  // O B J E C T  - M E T H O D S - C O U N T R Y 
  //---------------------------------------------
  // List of Values
  //++++++ String ++++++ \\     //++++++ Value ++++++ \\      //++++++ ArrayObject ++++++ \\        //++++++ StringifyArrayObject ++++++ \\       //++++++ SimplyStringifyArrayObject ++++++ \\
  // - name                     // - population               // - topLevelDomain                   // - currencies                               // - translations
  // - region                   // - area                     // - callingCodes                     // - languages
  // - subregion                // - gini                     // - altSpellings                     // - regionalBlocks
  // - alpha2Code                                             // - latlng 
  // - alpha3Code                                             // - timezones
  // - capital                                                // - borders
  // - demonym
  // - nativeName
  // - numericCode
  // - flag
  // - cioc
  
  getSingleValue(value) {
    return this.country[0][value]
  }
  
  getSingleStringValue(value): string {
    return this.country[0][value]
  }

  getArrayObjectValue(value): Array<Object> {
    let arrayObject = []
    for (let i = 0; i < this.country[0][value].length; i++) {
      arrayObject.push(this.country[0][value][i])
    }
    return arrayObject
  }

  getStringifyArrayObjectValue(value): Array<Object> {
    return JSON.stringify(this.country[0][value]).replace('[{', '').replace('}]', '').split(',')
  }

  getStringifyObjectValue(value): Array<Object> {
    return JSON.stringify(this.country[0][value]).replace('{', '').replace('}', '').split(',')
  }
}
