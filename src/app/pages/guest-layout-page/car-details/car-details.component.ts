import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {
  carId: any;
  currentPage: string = "About"

  constructor( 
    private route: ActivatedRoute) {
    
    // get car unique identity from url parameter
    this.route.params.subscribe(params => {
      this.carId = params['vin']
      console.log(this.carId)
    })

    }

 ngOnInit() {
     // Horizontal Timeline js for user timeline
     $.getScript('./assets/js/vertical-timeline.js');
 }

 showPage(page: string) {
     this.currentPage = page;
 }

}
