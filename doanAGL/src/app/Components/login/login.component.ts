import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { FormBuilder,Validators } from '@angular/forms';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Location } from '@angular/common'
import { CpnHeaderComponent,checklogin } from '../cpn-header/cpn-header.component';

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
  url='https://app-t2204m-eprojet.herokuapp.com/'
  urltest='http://localhost:1234/'
  urlpagetest='http://localhost:4200/'
  urlWeb='https://eproject-team.web.app/'
  loginSubmit(){

    let data = this.FormLogin.value
    console.log(data.email +" "+data.password )
    this.http.post<any>(`${this.url}checkUerlogin`,{emailorphone:data.email,password:data.password}).subscribe(vl=>{
      console.log(vl)
      if(vl.status==101){
        localStorage.setItem("user",JSON.stringify({user:data.email,id:1}));
        // go back not reload page
        // this.location.back();
        // go to url and load page
        window.location.replace(this.urlWeb);
        // go to path , not reload page
        // this.rt.navigate(['/'])
      }else if(vl.status==303){
        alert("user name or password incorrect")
        this.checkuser=true;
      }else{
        alert("Unverified account")
      }

    })
  }
  addtest(){
    new checklogin(1);
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
