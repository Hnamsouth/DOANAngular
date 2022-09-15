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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //check form shows/hide
  testSwitch=1;
  togleform(){
    // if(this.route.snapshot.params['register'] == 1){this.testSwitch=2;console.log(this.route.snapshot.params['register'])}else{this.testSwitch=1}
    this.testSwitch=this.testSwitch==1?2:1;
  }

  // form login
  FormLogin =  this.fbd.group({
    email:['', Validators.required],
    password:['', Validators.required]
   })
   // form register
   FormRegister =this.fbd.group({
    Firstname:['', Validators.required],
    Lastname:['', Validators.required],
    Email:['', Validators.required],
    Password:['', Validators.required],
    repeatpassword:['', Validators.required],
   })
  // check repeat pw
  checkpw=false;
  iconcheck='bi bi-exclamation-circle danger';
// check user login
checkuser=false;
  constructor(private fbd:FormBuilder,private http:HttpClient,private route:ActivatedRoute,private rt: Router,private location: Location) {

  }
  // exclamation check
  onchange(){
    let data = this.FormRegister.value
    if(!data.Password && !data.repeatpassword){this.checkpw=false}
    else if(data.Password===data.repeatpassword){this.checkpw=false}else{
      this.iconcheck='bi bi-exclamation-circle text-danger'}
  }
  //
  loginSubmit(){
    let data = this.FormLogin.value
    // console.log(check.email===check.password? 1:0);
    console.log(data.email +" "+data.password )
    this.http.post<any>('http://localhost:1234/checkUer',{emailorphone:data.email,password:data.password}).subscribe(vl=>{
      console.log(vl)
      if(vl.status){this.location.back()}else{
        alert("user not found")
      }

    })


  }
  registerSubmit(){
    // check password
    let data = this.FormRegister.value
    if(data.Password!==data.repeatpassword || !data.Password || !data.repeatpassword){
      this.checkpw=true;this.iconcheck='bi bi-exclamation-circle text-danger'}
      else{
      this.iconcheck='bi bi-check-circle text-success';
    }
    // console.table(this.FormRegister.value);
//  push api
    this.http.post('http://localhost:1234/createUser',{
      firstname:data.Firstname,
      lastname:data.Lastname,
      emailorphone:data.Email,
      password:data.Password
    }).subscribe(vl=>{console.log(vl)})
  }
  checkurl(){
// check url current
    // snapshot => test: Route(url:'login', path:'login')
    this.route.url.subscribe(vl=>{
      console.log("test: " + vl);
      })
      // back


      // this.location.back()
  }


  ngOnInit(): void {

  }

}
