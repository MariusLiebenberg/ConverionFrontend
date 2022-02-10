import {Component, OnInit} from "@angular/core";
import {ConverionModel} from "../converion.model";
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
  temp: ConverionModel = new ConverionModel();
  constructor(private http:HttpClient) {
  }
  //@ts-ignore
  convertTemperature(inputInd, inputValue) {
    // @ts-ignore
    let temperature:ConverionModel = new ConverionModel();
    temperature.inputTempInd = inputInd;
    // this.metricConversion = inputValue;
    temperature.inputValue = inputValue;
    console.warn(temperature.inputValue)//displays the input value in the console. Handy for debugging

    //call the api call.
    //Place the return type after post so that the data can get the converted value
    this.http.post<ConverionModel>('http://localhost:8080/conversionApp/convertUnit', temperature).subscribe(data => {console.log("my data", data)
                           if(data){
                             //if the incoming value is from the fahrenheit input then populate the celsius text
                             if(data.inputTempInd === 'F'){
                               // @ts-ignore
                               this.metricConversion = data.convertedValue.toFixed(2);
                             }
                             //if the incoming value is from the celsius input then populate the Fahrenheit text
                             if(data.inputTempInd === 'C'){
                               // @ts-ignore
                               this.imperialConversion = data.convertedValue.toFixed(2);
                             }

                           }
     });

  }

  ngOnInit(): void {
  }


}

