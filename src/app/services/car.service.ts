import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl='https://localhost:44327/api/';

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+'cars/getdetail'
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+'cars/getbycolor?colorId='+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+'cars/getbybrand?brandId='+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByCar(carId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+'cars/getbycar?carId='+carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
