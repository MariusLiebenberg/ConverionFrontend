import {Component} from "@angular/core";
import {ConverionModel} from "../converion.model";
import {HttpClient} from "@angular/common/http";

@Component(
  {
    selector :'app-distance-conversion',
    templateUrl:'./distanceConversion.component.html'
  }
)

export class DistanceConversionComponent {
  // @ts-ignore
  imperialConversionD: number = '';
  // @ts-ignore
  metricConversionD: number = '';
  temp: ConverionModel = new ConverionModel();

  constructor(private http: HttpClient) {
  }

  //@ts-ignore
  convertDistance(inputInd, inputValue) {
    // @ts-ignore
    let distance: ConverionModel = new ConverionModel();
    distance.inputTempInd = inputInd;
    // this.metricConversion = inputValue;
    distance.inputValue = inputValue;
    console.warn(distance.inputValue)
    //call the api call.
    //Place the return type after post so that the data can get the converted value
    this.http.post<ConverionModel>('http://localhost:8080/conversionApp/convertUnit', distance).subscribe(data => {
      console.log("my data", data)
      if (data) {
        if (data.inputTempInd === 'M') {
          //ts ignore is used to disable the strict parameters validation
          // @ts-ignore
          this.metricConversionD = data.convertedValue.toFixed(2);//use toFixed to round to two decimals
        }
        if (data.inputTempInd === 'K') {
          // @ts-ignore
          this.imperialConversionD = data.convertedValue.toFixed(2);
        }
      }
    })
  }
}
