export class TemperatureModel{
  // This is the temperature model that will be used for the conversions
  // @ts-ignore
  public  inputTempInd : string;
  // @ts-ignore
  public inputValue : number;
  // @ts-ignore
  public convertedValue : number;

  constructor(inputTempInd : string, inputValue : number, convertedValue : number) {
    this.inputTempInd = inputTempInd;
    this.inputValue = inputValue;
    this.convertedValue = convertedValue;
  }


}
