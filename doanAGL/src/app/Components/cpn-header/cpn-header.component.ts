import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Injectable}             from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, Observable, OperatorFunction } from 'rxjs';
import { ServiService } from '../servi.service';
const states = ['Buy ticket', 'infomation', 'location shot', 'hollowgraves','cart','home stay','help','water park','requirement',' arcades','pet','food'];
@Component({
  selector: 'app-cpn-header',
  templateUrl: './cpn-header.component.html',
  styleUrls: ['./cpn-header.component.scss']
})

export class CpnHeaderComponent implements OnInit {
  public model: any;
  formatter = (result: string) => result.toUpperCase();
  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term.length < 2 ? []
      : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  );

  navbar:any={}
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
  // ---------
  searchbar(key:any){
    if(key.keyCode===13){
      states.forEach((item:any,index:any)=>{
        if(item.includes(this.model)){
          if(index==0){window.location.replace(`${this.servi.urlWeb}select-tickets`);}else
          if(index==1){window.location.replace(`${this.servi.urlWeb}information`);}else
          if(index==2){window.location.replace(`${this.servi.urlWeb}`);}else
          if(index==3){window.location.replace(`${this.servi.urlWeb}hollowgraves-haunted`);}else
          if(index==4){window.location.replace(`${this.servi.urlWeb}cart`);}else
          if(index==5){window.location.replace(`${this.servi.urlWeb}`);}else
          if(index==6){window.location.replace(`${this.servi.urlWeb}`);}else
          if(index==7){window.location.replace(`${this.servi.urlWeb}runaway-rapids`);}else
          if(index==8){window.location.replace(`${this.servi.urlWeb}`);}else
          if(index==9){window.location.replace(`${this.servi.urlWeb}arcades`);}else
          if(index==10){window.location.replace(`${this.servi.urlWeb}`);}else
          if(index==11){window.location.replace(`${this.servi.urlWeb}restaurant`);}
        }
      })
    }
  }

  ckUserLogin(){
    this.usercheck==true?window.location.replace(`${this.servi.urlWeb}checkout-booking`):
    window.location.replace(`${this.servi.urlWeb}login`);
  }


}



