import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { FormBuilder,Validators } from '@angular/forms';
import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Location } from '@angular/common'
import { ServiService } from '../servi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input()datacheckout:any;
  //check form shows/hide
  testSwitch=1;
  togleform(){
    this.testSwitch=this.testSwitch==1?2:1;
  }
  // form login
  FormLogin =  this.fbd.group({
    email:['', Validators.required],
    password:['', Validators.required]
   })

// check user login
checkuser=false;

  constructor(private fbd:FormBuilder,private http:HttpClient,private route:ActivatedRoute,private rt: Router,private location: Location,private servi:ServiService) {

  }
  // exclamation check
  loginSubmit(){

    let data = this.FormLogin.value
    console.log(data.email +" "+data.password )
    this.http.post<any>(`${this.servi.urlapi}checkUerlogin`,{emailorphone:data.email,password:data.password}).subscribe(vl=>{
      console.log(vl)
      if(vl.status==101){
        localStorage.setItem("user",JSON.stringify({user:data.email,id:1}));
        if(this.datacheckout){
          window.location.replace(`${this.servi.urlWeb}checkout-booking`);
        }else{
          window.location.replace(this.servi.urlWeb);
        }

      }else if(vl.status==303){
        alert("user name or password incorrect")
        this.checkuser=true;
      }else{
        alert("Unverified account")
      }

    })
  }
  ngOnInit(): void {
  }

}
