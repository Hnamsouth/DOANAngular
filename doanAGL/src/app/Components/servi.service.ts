import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiService {
  static data1:any[]=[]
    currentTK:any[]=ServiService.data1;


  constructor() { }
  getticket(data:any[]){
    if(data.length!==0){ServiService.data1=data}
    return this.currentTK;
  }
}
