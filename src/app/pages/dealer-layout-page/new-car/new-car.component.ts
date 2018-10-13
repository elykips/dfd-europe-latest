import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'app/services/car/car.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'app/services/toastr/toastr.service';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss']
})
export class NewCarComponent implements OnInit {

  newCarForm:FormGroup;

  constructor(
    private router: Router,
    private carService: CarService,
    private formBuilder: FormBuilder,
    private service: ToastrService
  ) { }

  ngOnInit() {
    this.newCarForm = this.formBuilder.group({
      VIN: new FormControl('KNDJP3A55E7035837', Validators.minLength(17)),
      YEAR: new FormControl('2014'  ),
      MAKE: new FormControl('TOYOTA' ),
      MODEL: new FormControl('COROLA' ),
      TRIM: new FormControl('LE' ),
      SHORT_TRIM: new FormControl('LE' ),
      TRIM_VARIATIONS: new FormControl('LE/LE/S' ),
      MADE_IN: new FormControl('UNITED STATES' ),
      VEHICLE_STYLE: new FormControl('SEDAN(4-DOORS)' ),
      VEHICLE_TYPE: new FormControl('CAR' ),
      VEHICLE_SIZE: new FormControl('COMPACT' ),
      VEHICLE_CATEGORY: new FormControl('SMALL STATION WAGON' ),
      DOORS: new FormControl('4' ),
      FUEL_TYPE: new FormControl('REGULAR UNLEADED' ),
      FUEL_CAPACITY: new FormControl('14.2 GALLON' ),
      CITY_MILEAGE: new FormControl('23-24 MILES/GALLON' ),
      HIGHWAY_MILEAGE: new FormControl('28-29 MILES / GALLON' ),
      ENGINE: new FormControl('2.0L LA DOHC 16V' ),
      ENGINE_SIZE: new FormControl('2' ),
      ENGINE_CYLINDERS: new FormControl('4' ),
      TRANSMISSION_TYPE: new FormControl('AUTOMATIC' ),
      GEERS: new FormControl('6' ),
      DRIVEN_WHEELS: new FormControl('FRONT WHEELS DRIVE' ),
      ANTI_BRAKE_SYSTEM: new FormControl('4 WHEELS ABS' ),
      STEERING_TYPE: new FormControl('R&P' ),
      CURB_WEIGHT: new FormControl('2714 KGS' ),
      GROSS_WEIGHT: new FormControl('N/A' ),
      OVERAL_HEIGHT: new FormControl('63.40 INCHES' ),
      OVERAL_LENGTH: new FormControl('163.00 INCHES' ),
      OVERAL_WIDTH: new FormControl('70.90 INCHES' ),
      STANDARD_SEATING: new FormControl('5' ),
      OPTIONAL_SEATING: new FormControl('N/A' ),
      INVOICE_PRICE: new FormControl('17522' ),
      DELIVERY_CHARGES: new FormControl('795' ),
      MSRP: new FormControl('18400' )
    });
  }

  // geters for car form form controls 

  get vin(){
    return this.newCarForm.get('VIN')
  }

  get year(){
    return this.newCarForm.get('YEAR')
  }

  get make(){
    return this.newCarForm.get('MAKE')
  }

  get model(){
    return this.newCarForm.get('MODEL')
  }

  get trim(){
    return this.newCarForm.get('TRIM')
  }

  get short_trim(){
    return this.newCarForm.get('SHORT_TRIM')
  }

  get trim_variations(){
    return this.newCarForm.get('TRIM_VARIATIONS')
  }

  get made_in(){
    return this.newCarForm.get('MADE_IN')
  }

  get vehicle_style(){
    return this.newCarForm.get('VEHICLE_STYLE')
  }

  get vehicle_type(){
    return this.newCarForm.get('VEHICLE_TYPE')
  }

  get vehicle_size(){
    return this.newCarForm.get('VEHICLE_SIZE')
  }

  get vehicle_category(){
    return this.newCarForm.get('VEHICLE_CATEGORY')
  }

  get doors(){
    return this.newCarForm.get('DOORS')
  }

  get fuel_type(){
    return this.newCarForm.get('FUEL_TYPE')
  }

  get fuel_capacity(){
    return this.newCarForm.get('FUEL_CAPACITY')
  }

  get city_mileage(){
    return this.newCarForm.get('CITY_MILEAGE')
  }

  get highway_mileage(){
    return this.newCarForm.get('HIGHWAY_MILEAGE')
  }

  get engine(){
    return this.newCarForm.get('ENGINE')
  }

  get engine_size(){
    return this.newCarForm.get('ENGINE_SIZE')
  }

  get engine_cylinders(){
    return this.newCarForm.get('ENGINE_CYLINDERS')
  }

  get transmission_type(){
    return this.newCarForm.get('TRANSMISSION_TYPE')
  }

  get geers(){
    return this.newCarForm.get('GEERS')
  }

  get driven_wheels(){
    return this.newCarForm.get('DRIVEN_WHEELS')
  }

  get anti_brake_system(){
    return this.newCarForm.get('ANTI_BRAKE_SYSTEM')
  }

  get steering_type(){
    return this.newCarForm.get('STEERING_TYPE')
  }

  get curb_weight(){
    return this.newCarForm.get('CURB_WEIGHT')
  }

  get gross_weight(){
    return this.newCarForm.get('GROSS_WEIGHT')
  }

  get overal_height(){
    return this.newCarForm.get('OVERAL_HEIGHT')
  }

  get overal_length(){
    return this.newCarForm.get('OVERAL_LENGTH')
  }

  get overal_width(){
    return this.newCarForm.get('OVERAL_WIDTH')
  }

  get standard_seating(){
    return this.newCarForm.get('STANDARD_SEATING')
  }

  get optional_seating(){
    return this.newCarForm.get('OPTIONAL_SEATING')
  }

  get invoice_price(){
    return this.newCarForm.get('INVOICE_PRICE')
  }

  get delivery_charges(){
    return this.newCarForm.get('DELIVERY_CHARGES')
  }

  get msrp(){
    return this.newCarForm.get('MSRP')
  }


  // geter for car form values 
  get carDetails(){
    return this.newCarForm.value
  }


  registerNewCar(){
    this.carService.uploadCarDetails(this.carDetails)
  }

}
