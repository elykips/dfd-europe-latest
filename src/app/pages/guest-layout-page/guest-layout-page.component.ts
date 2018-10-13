import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest-layout-page',
  templateUrl: './guest-layout-page.component.html',
  styleUrls: ['./guest-layout-page.component.scss']
})
export class GuestLayoutPageComponent {

  constructor(
    private router: Router){

  }
}
