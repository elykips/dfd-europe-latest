import { Injectable } from '@angular/core';

@Injectable()
export class CarService {

  constructor() {

   }

   uploadCarDetails(car){
     console.log("Car Service: ", car)
   }

}
