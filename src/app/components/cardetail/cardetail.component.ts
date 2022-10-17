import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css'],
})
export class CardetailComponent implements OnInit {
  cars: Car[] = [];
  carImages:CarImage[];
  dataLoaded = false;
  constructor(
    private carDetail: CardetailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetail(params['carId']);
        this.getCarImage(params['carId']);
      }
    });
  }
  getCarDetail(carId: number) {
    this.carDetail.getCarDetail(carId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
      console.log(response.data)
    });
  }
  getCarImage(carId: number) {
    this.carDetail.getCarImage(carId).subscribe((response) => {
      this.carImages = response.data;
      this.dataLoaded = true;
      console.log(response.data)
    });
  }
}
