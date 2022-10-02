import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { Binary } from '@angular/compiler';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Renderer2 } from '@angular/core';
import {Observable, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, filter} from 'rxjs/operators';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-regitster',
  templateUrl: './regitster.component.html',
  styleUrls: ['./regitster.component.scss','../login/login.component.scss']
})
export class RegitsterComponent implements OnInit {

  constructor(private fbd:FormBuilder,private http:HttpClient,private route:ActivatedRoute,private rt: Router,private location: Location) { }
  FormRegister =this.fbd.group({
    Firstname:['', Validators.required],
    Lastname:['', Validators.required],
    Email:['', Validators.required],
    Password:['', Validators.required],
    repeatpassword:['', Validators.required],
   })
  url='https://app-t2204m-eprojet.herokuapp.com';
  urltest='http://localhost:1234'
  checkpw=false;ckemail=false;
  iconcheck='bi bi-exclamation-circle danger';

   registerSubmit(){
    let data = this.FormRegister.value
    // check email
    console.log(data)
    if(data.Password!==data.repeatpassword || !data.Password || !data.repeatpassword){
      this.checkpw=true;this.iconcheck='bi bi-exclamation-circle text-danger'}
      else{
      this.iconcheck='bi bi-check-circle text-success';
      let stt =Math.floor(Math.random() * 86423)+12345;
      let cverifystt=stt;

      this.http.post<any>(`${this.url}/createUser`,{
        firstname:data.Firstname,
        lastname:data.Lastname,
        emailorphone:data.Email,
        password:data.Password,
        cverify:cverifystt
      }).subscribe(vl=>{
          console.log(cverifystt)
          console.log(vl)
          if(vl.status===101){ // chua verify
            this.http.post(`${this.url}/sendmail`,{User:data.Email,Stt:cverifystt}).subscribe(vl=>{});
            this.rt.navigate([`/checkverify`,{user:`${data.Email}`}]);
          }else if(vl.status===202){ // create n
            this.http.post(`${this.url}/sendmail`,{User:data.Email,Stt:cverifystt}).subscribe(vl=>{});
            this.rt.navigate([`/checkverify`,{user:`${data.Email}`}]);
          }else{ // user registed
            this.ckemail=true;
          }
      });
      }
    }


  onchange(){
    let data = this.FormRegister.value
    if(!data.Password && !data.repeatpassword){this.checkpw=false}
    else if(data.Password===data.repeatpassword){this.checkpw=false}else{
      this.iconcheck='bi bi-exclamation-circle text-danger'}
  }
  ngOnInit(): void {
  }

}
