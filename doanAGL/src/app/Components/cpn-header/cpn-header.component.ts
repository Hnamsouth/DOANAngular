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
  navbar={
    items:[
      // {
      //   navname:"",
      //   icon:"",
      //   navitems:[
      //     {
      //       title:"",
      //       child_items:[
      //         {
      //           icon:"",name:""
      //         },
      //         {icon:"",name:""}
      //       ]
      //     }
      //   ],
      //   FeaturedItems:[],
      // routelink:
      //   {
      //     main:''
      //   }
      //
      // }
      {
        navname:"Ticket",
        icon:"",
        navitems:[
          {
            title:"Items 1",
            child_items:[
              {
                icon:"bi bi-info-circle",name:"Ticket InformatiWon"
              },
              {icon:"fa-solid fa-horse",name:" Ride Height & Ticketing"}
            ]
          },{
            title:"Items 2",
            child_items:[
              {icon:"bi bi-stars",name:" Discount & Specials"},
              {icon:"bi bi-bag-plus",name:" Buy Ticket"}
            ]
          }
        ],
        FeaturedItems:[],
        routelink:
          {
            main:'/ticket'
          }

      },{
          navname:"Ride & Attractions",
          icon:"",
          navitems:[
            {
              title:"Games",
              child_items:[
                {icon:"",name:"Runaway Rapids"},
                {icon:"",name:"Hollowgraves Haunted Manor"},
                {icon:"",name:"Batting Cages"},
                {icon:"",name:"Keansburg Games"},
                {icon:"",name:"Arcades"},
              ]
            },{
              title:"Water",
              child_items:[
                {icon:"",name:"Keansburg Amusement Park"},
                {icon:"",name:"Fishing Pier"},
                {icon:"",name:"Beach"},
              ]
            },
            {
              title:"Kids",
              child_items:[
                {icon:"",name:"Go Karts"},
              ]
            }
          ],
          FeaturedItems:[],
          routelink:
            {
              main:'/ride-attraction'
            }

        },
         {
        navname:"Foods",
        icon:"",
        navitems:[
          {
            title:"Popular",
            child_items:[
              {icon:"",name:"Nickerson’s Ice Cream"},
              {icon:"",name:"Pizza V"},
              {icon:"",name:"Girardi’s Kabobs"},
              {icon:"",name:"CJ’s Spot"},
              {icon:"",name:"Coastal Ice Cream"},
              {icon:"",name:"view detail"},
            ]
          }
        ],
        FeaturedItems:[],
        routelink:
          {
            main:'/restaurant'
          }

      },
      {
        navname:"Information",
        icon:"",
        navitems:[
          {
            title:"",
            child_items:[
              {icon:"",name:"General Information"},
              {icon:"",name:"History"},
              {icon:"",name:"Service Animals"},
            ]
          },
          {
            title:"News",
            child_items:[
              {icon:"",name:"Operating Calendar"},
              {icon:"",name:"Events"},
              {icon:"",name:"Fundraising"},
            ]
          },
          {
            title:"Location",
            child_items:[
              {icon:"",name:"Accommodations"},
              {icon:"",name:"Location Shoots"},
              {icon:"",name:"Directions & Parking"},
              {icon:"",name:"Park Map"},
            ]
          }
        ],
        FeaturedItems:[],
        routelink:
          {
            main:'/information'
          }

      },
      {
        navname:"Shop",
        icon:"",
        navitems:[
          {
            title:"",
            child_items:[
              {
                icon:"",name:"Toys"
              },
              {icon:"",name:"Clothes"}
            ]
          }
        ],
        FeaturedItems:[],
        routelink:
          {
            main:''
          }

      },
      {
        navname:"Groups & Parties",
        icon:"",
        navitems:[
          {
            title:"",
            child_items:[
              {
                icon:"",name:"Group Packages"
              },
              {icon:"",name:"Brithday Packages"},
              {icon:"",name:"Jeep Jam & Truck Show 2022"},
            ]
          }
        ],
        FeaturedItems:[],
        routelink:
          {
            main:''
          }

      }
    ]
  }
   user:number=CpnHeaderComponent.addtest;
   static addtest:number=0;
  array =[1,2,4,2,2]
  myGroup=new FormGroup({
    checkadd:new FormControl(),
  })
  ticket:any[]=[];
  getticket(data:any[]){
    this.ticket=data;
    // console.log('123')
    this.ngOnInit()
  }
  constructor() {
    var gticket:any[];
    const list = document.querySelectorAll('.list');
    list.forEach(item=>{
          item.addEventListener('click',()=>{
            console.log('11')
            });
          })
          let user =localStorage.getItem("user")
          // JSON.parse(user)
          // console.log(user)
          // console.log(localStorage.getItem("user"))
          // this.test({email:'', password: ''});
          console.log("1")
          let check:any=localStorage.getItem('currentTicket')
      let test=JSON.parse(check)
      console.log("-----" + JSON.stringify(test[0]) + JSON.stringify(test[1]))
  }

  ngOnInit(): void {

    console.log('2')

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
export class checkTicket{
  constructor(public data:any[]){

  }
}


