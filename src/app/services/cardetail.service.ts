import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {

  apiUrl='https://localhost:44327/api/';

  constructor(private httpClient:HttpClient) { }

  getCarDetail(carId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+'Cars/getbyid?id='+carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarImage(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+'carimages/getimagesbycarid?id='+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
