import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariableGlobalesService {

  urlServer: string = '';
  urlServerLocal: string = 'http://localhost:5000';
  urlServerPublic: string = 'https://dilemme-prisonnier-toure-mokni.herokuapp.com';

  constructor() {
    this.urlServer = this.urlServerPublic;
  }
}
