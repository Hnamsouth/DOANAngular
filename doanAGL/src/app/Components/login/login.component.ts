import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { FormBuilder,Validators } from '@angular/forms';
import { Component, OnInit, Renderer2 } from '@angular/core';
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

// check user login
checkuser=false;
  constructor(private fbd:FormBuilder,private http:HttpClient,private route:ActivatedRoute,private rt: Router,private location: Location) {
  }
  // exclamation check
  loginSubmit(){
    let data = this.FormLogin.value
    console.log(data.email +" "+data.password )
    this.http.post<any>('http://localhost:1234/checkUer',{emailorphone:data.email,password:data.password}).subscribe(vl=>{
      console.log(vl)
      if(vl.status){this.location.back()}else{
        alert("user not found")
      }

    })
  }
//   checkurl(){
// // check url current
//     // snapshot => test: Route(url:'login', path:'login')
//     this.route.url.subscribe(vl=>{
//       console.log("test: " + vl);
//       })
//       // this.location.back()
//   }
  ngOnInit(): void {
  }

}
