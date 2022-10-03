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

  usercheck=false
  url='https://app-t2204m-eprojet.herokuapp.com';
  urltest='http://localhost:1234'

  cartcheck=false;
  cartdata:any[]=[];
  Subtotalall=0



  constructor(private http:HttpClient) {
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
      this.http.post<any>(`${this.url}/checkverify`,{emailorphone:test.user}).subscribe(vl=>{
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
// --------------------
   // getticket(data:any[]){
  //   this.ticket=data;
  //   // console.log('123')
  //   this.ngOnInit()
  // }

}
export class checklogin{
  data:object={}
  constructor(public user:any){
    // console.log("test export", user)
    // this.data=user
    // new CpnHeaderComponent().test(user)
    CpnHeaderComponent.addtest
  }
}
export class checkTicket{
  constructor(public data:any[]){

  }
}


