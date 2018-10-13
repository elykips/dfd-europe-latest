import { Injectable } from '@angular/core';

@Injectable()
export class DealerService {

  constructor() { }

  registerNewClient(client){
    console.log("New Client Registered:", client)
  }

}
