import {Component} from "@angular/core";
import {TemperatureModel} from "./temperature.model";
import {HttpClient} from "@angular/common/http";
@Component(
  {
    selector : 'app-temperature-conversion',
    templateUrl : './temperatureConversion.component.html'
  }
)
export class TemperatureConversionComponent{
  constructor(private http:HttpClient) {
  }
  //@ts-ignore
  convertTemperature(inputInd, inputValue){
    // @ts-ignore
    let temperature:TemperatureModel  = new TemperatureModel(inputInd, inputValue, 0);
    console.warn(inputValue)
    this.http.post('http://localhost:8080/conversionApp/convertToCelcius', {Temperature: temperature}).subscribe();
    // http://localhost:8080/conversionApp/convertToCelcius


  }

}
