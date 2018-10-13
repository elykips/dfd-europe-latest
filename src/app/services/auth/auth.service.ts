import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { 

  }

  //register dealer
  createDealerProfile(dealer){
    console.log("Auth Service:- Created Profile For: ", dealer)
   }

   //sign-in a dealer
  startSesion(credentials){
    console.log("Auth Service:- Started Session For: ", credentials )

    }


  }


