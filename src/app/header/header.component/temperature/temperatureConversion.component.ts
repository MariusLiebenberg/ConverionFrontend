import {Component, OnInit} from "@angular/core";
import {TemperatureModel} from "./temperature.model";
import {HttpClient} from "@angular/common/http";
@Component(
  {
    selector : 'app-temperature-conversion',
    templateUrl : './temperatureConversion.component.html'
  }
)
export class TemperatureConversionComponent implements OnInit  {
  // @ts-ignore
  imperialConversion :number = '';
  // @ts-ignore
  metricConversion : number = '';
  temp: TemperatureModel = new TemperatureModel();
  constructor(private http:HttpClient) {
  }
  //@ts-ignore
  convertTemperature(inputInd, inputValue) {
    // @ts-ignore
    let temperature:TemperatureModel = new TemperatureModel();
    temperature.inputTempInd = inputInd;
    // this.metricConversion = inputValue;
    temperature.inputValue = inputValue;
    console.warn(temperature.inputValue)
    this.http.post<TemperatureModel>('http://localhost:8080/conversionApp/convertToCelcius', temperature).subscribe(data => {console.log("my data", data)
                           if(data){
                             if(data.inputTempInd === 'F'){
                               this.metricConversion = data.convertedValue;
                             }
                             if(data.inputTempInd === 'C'){
                               this.imperialConversion = data.convertedValue;
                             }
                              // this.temp.inputTempInd = data.inputTempInd;
                              // this.temp.inputValue = data.inputValue;
                              // this.temp.convertedValue = data.convertedValue;
                           }
     });
    // window.location.reload();
    // if(this.temp.inputTempInd =="F"){
    //   this.metricConversion = this.temp.convertedValue;
    // }
    // if(this.temp.inputTempInd =="C"){
    //   this.imperialConversion = this.temp.convertedValue;
    // }


  }

  ngOnInit(): void {
  }


}

