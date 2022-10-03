import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Injectable}             from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiService } from '../servi.service';
var datauser:any
@Component({
  selector: 'app-cpn-header',
  templateUrl: './cpn-header.component.html',
  styleUrls: ['./cpn-header.component.scss']
})

export class CpnHeaderComponent implements OnInit {
  navbar:any={}
   user:number=CpnHeaderComponent.addtest;
   static addtest:number=0;
  array =[1,2,4,2,2]
  myGroup=new FormGroup({
    checkadd:new FormControl(),
  })
  ticket:any[]=[];

  usercheck=false

  cartcheck=false;
  cartdata:any[]=[];
  Subtotalall=0



  constructor(private http:HttpClient,private servi:ServiService) {
    this.navbar=this.servi.navbar
    this.checkuser()
    this.checkCart()
  }

  ngOnInit(): void {

  }
// -----------
  checkuser(){
    let user:any =localStorage.getItem("user");
    if(user){
      let test=JSON.parse(user);
      this.http.post<any>(`${this.servi.urlapi}checkverify`,{emailorphone:test.user}).subscribe(vl=>{
        console.log(vl)
              if(vl.data==1){
                this.usercheck=true
              }
            })
    }
}
// -----------
  checkCart(){
    let cart:any =localStorage.getItem("currentTicket");
    if(cart){
      let test=JSON.parse(cart);
      if(test.length!==0){
        this.cartdata=test;
        this.cartcheck=true;
        this.Subtotalall=0
        test.forEach((data:any) => {
           this.Subtotalall+= data.cost
        });
        console.log(test)
      }
    }
  }
// -----------
  signout(){
    localStorage.removeItem('user')
    this.usercheck=false
  }

}



