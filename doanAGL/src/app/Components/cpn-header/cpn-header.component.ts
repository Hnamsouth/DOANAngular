import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Injectable}             from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
var datauser:any
@Component({
  selector: 'app-cpn-header',
  templateUrl: './cpn-header.component.html',
  styleUrls: ['./cpn-header.component.scss']
})

export class CpnHeaderComponent implements OnInit {
   user:number=CpnHeaderComponent.addtest;
   static addtest:number=0;
  array =[1,2,4,2,2]
  myGroup=new FormGroup({
    checkadd:new FormControl(),
  })
  constructor() {
    const list = document.querySelectorAll('.list');
    list.forEach(item=>{
          item.addEventListener('click',()=>{
            console.log('1')
            });
          })
          let user =localStorage.getItem("user")
          // JSON.parse(user)
          // console.log(user)
          // console.log(localStorage.getItem("user"))
          // this.test({email:'', password: ''});
          console.log("1","asd",this.user)
  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.cliiii()
    // },1000);
    console.log("2")
  }
  test(users:any){
    console.log("3",users)
    // new CpnHeaderComponent()
    if(!users.email&& !users.password){
      // datauser=usersx
      // this.user=datauser
      // console.log(" test",datauser)
      console.log("4",users)
    }else{
      datauser=users
      this.user=users
      console.log("5",datauser)
      this.cliiii()
    }
  }
  cliiii(){
    this.myGroup.value.checkadd=CpnHeaderComponent.addtest
    this.user=CpnHeaderComponent.addtest
    // console.log("check",datauser)
    console.log("6",this.user)
  }
  addcheck(vl:number){
    CpnHeaderComponent.addtest+=vl
    this.myGroup.value.checkadd=CpnHeaderComponent.addtest
    console.log("7",this.myGroup.value.checkadd)
  }

}
export class checklogin{
  data:object={}
  constructor(public user:any){
    // console.log("test export", user)
    // this.data=user
    // new CpnHeaderComponent().test(user)
    new CpnHeaderComponent().addcheck(user)
    CpnHeaderComponent.addtest
  }
}


