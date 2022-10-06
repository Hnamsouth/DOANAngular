import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiService {


    typedataticket={
      rides:{id:0,amount:0,date:'',stdCost:1.25,C50TK:0.9,C100TK:0.79,C200TK:0.745,cost:0},
      gokart:{id:1,amount:0,date:'',typePick:0,type:[
        {id:0,name:'Adult Track',cost:7.95},
        {id:1,name:'Double Seater',cost:9.95},
        {id:2,name:'Kiddie Track',cost:4.95},
        {id:3,name:'Book of 4 Adult Rides',cost:29.95},
        {id:4,name:'Book of 8 Adult Rides',cost:49.95}
      ],cost:0},
      waterP:{id:2,amount:0,date:'',typePick:0,type:[
        {id:0,name:'Water park for Adult',cost:37},
        {id:1,name:'Water park for Kids',cost:19},
        {id:2,name:'Dry Spectators',cost:15},
      ],cost:0},
      combo:{id:3,amount:0,date:new Date().toLocaleDateString()}
    }
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
        //           icon:"",routelink:'',name:""
        //         },
        //         {icon:"",routelink:'',name:""}
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
                  icon:"bi bi-info-circle",routelink:'/ticket-infomation',name:"Ticket Information"
                },
                {icon:"fa-solid fa-horse",routelink:'/rideheight-ticketing',name:" Ride Height & Ticketing"}
              ]
            },{
              title:"Items 2",
              child_items:[
                {icon:"bi bi-stars",routelink:'',name:" Discount & Specials"},
                {icon:"bi bi-bag-plus",routelink:'/select-tickets',name:" Buy Ticket"}
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
                  {icon:"",routelink:'/runaway-rapids',name:"Runaway Rapids"},
                  {icon:"",routelink:'/hollowgraves-haunted',name:"Hollowgraves Haunted Manor"},
                  {icon:"",routelink:'/keansburg-games',name:"Keansburg Games"},
                  {icon:"",routelink:'/arcades',name:"Arcades"},
                ]
              },{
                title:"Water",
                child_items:[
                  {icon:"",routelink:'/fishing-pier',name:"Fishing Pier"},
                  {icon:"",routelink:'/beach',name:"Beach"},
                ]
              },
              {
                title:"Kids",
                child_items:[
                  {icon:"",routelink:'/go-karts',name:"Go Karts"},
                ]
              }
            ],
            FeaturedItems:[],
            routelink:
              {
                main:'/runaway-rapids'
              }

          },
           {
          navname:"Foods",
          icon:"",
          navitems:[
            {
              title:"Popular",
              child_items:[
                {icon:"",routelink:'',name:"Nickerson’s Ice Cream"},
                {icon:"",routelink:'',name:"Pizza V"},
                {icon:"",routelink:'',name:"Girardi’s Kabobs"},
                {icon:"",routelink:'',name:"CJ’s Spot"},
                {icon:"",routelink:'',name:"Coastal Ice Cream"},
                {icon:"",routelink:'',name:"view detail"},
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
                {icon:"",routelink:'',name:"General Information"},
                {icon:"",routelink:'history',name:"History"},
                {icon:"",routelink:'',name:"Service Animals"},
              ]
            }
            // ,
            // {
            //   title:"News",
            //   child_items:[
            //     {icon:"",routelink:'',name:"Operating Calendar"},
            //     {icon:"",routelink:'',name:"Events"},
            //     {icon:"",routelink:'',name:"Fundraising"},
            //   ]
            // },
            // {
            //   title:"Location",
            //   child_items:[
            //     {icon:"",routelink:'',name:"Accommodations"},
            //     {icon:"",routelink:'',name:"Location Shoots"},
            //     {icon:"",routelink:'',name:"Directions & Parking"},
            //     {icon:"",routelink:'',name:"Park Map"},
            //   ]
            // }
          ],
          FeaturedItems:[],
          routelink:
            {
              main:'/information'
            }

        },
        // {
        //   navname:"Shop",
        //   icon:"",
        //   navitems:[
        //     {
        //       title:"",
        //       child_items:[
        //         {
        //           icon:"",routelink:'',name:"Toys"
        //         },
        //         {icon:"",routelink:'',name:"Clothes"}
        //       ]
        //     }
        //   ],
        //   FeaturedItems:[],
        //   routelink:
        //     {
        //       main:''
        //     }

        // },
        // {
        //   navname:"Groups & Parties",
        //   icon:"",
        //   navitems:[
        //     {
        //       title:"",
        //       child_items:[
        //         {
        //           icon:"",routelink:'',name:"Group Packages"
        //         },
        //         {icon:"",routelink:'',name:"Brithday Packages"},
        //         {icon:"",routelink:'',name:"Jeep Jam & Truck Show 2022"},
        //       ]
        //     }
        //   ],
        //   FeaturedItems:[],
        //   routelink:
        //     {
        //       main:''
        //     }

        // }
      ]
    }
tax=9
  // link api
    urlapi='https://app-t2204m-eprojet.herokuapp.com/'
    // urltest='http://localhost:1234/'
    // link web
    // urlWeb='http://localhost:4200/'
    urlWeb='https://eproject-team.web.app/'


  constructor() { }
  setticket(data:any){localStorage.setItem('currentTicket',JSON.stringify(data))}
//
  setuser(data:any){localStorage.setItem('user',JSON.stringify(data))}
  //
  getticket(){
   let check:any=localStorage.getItem('currentTicket')
   if(check){let data=JSON.parse(check);return data}
  }
  //
  getuser(){
   let check:any=localStorage.getItem('user')
   if(check){let data=JSON.parse(check);return data}
  }
  //
  Subtotalall(){
    let cost=0.0;
    let data:any=this.getticket()
    if(data){
      data.forEach((item:any)=>{
        cost+=item.cost
      })
    }
    return cost;
  }

}
