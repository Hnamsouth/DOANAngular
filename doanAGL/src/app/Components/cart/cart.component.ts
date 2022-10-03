import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectTicketsComponent } from '../ticket/parktickets/select-tickets/select-tickets.component';
interface ticket{
  id:number,amount:number,costper1:number,name:string,datepick:string,cost:number,typeindex:number
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  userTicket:any[]=[];
  Subtotal:number=0.0;
  statusUser=true;
  constructor( private route:Router,private http:HttpClient) {
    this.getTK();
    this.Subtotalall();
    this.checkUseRLogin()
   }

  ngOnInit(): void {
  }

  checkUseRLogin(){
    let user:any=localStorage.getItem('user')
    if(user){
      this.statusUser=false
      console.log('cart111')
    }
  }
  getTK(){
    let check:any=localStorage.getItem('currentTicket')
    if(check){
      let test=JSON.parse(check)
      this.userTicket=test;
      return test;
    }

  }
  Subtotalall(){
   let data:any[] = this.getTK()
   if(data){
    data.forEach(item=>{
      this.Subtotal+=item.cost
     })
   }

  }
  changeamountTK(amount:any,index:any){
    let dataTK=this.getTK()
    let test=new SelectTicketsComponent(this.route,this.http).data
    console.log(amount.value + " --"+ index)
    console.log(dataTK)
    if(dataTK[index].id==0){
      dataTK[index].amount=amount.value
        if(dataTK[index].amount>=50 && dataTK[index].amount<100){
          dataTK[index].amount=amount.value;dataTK[index].cost=dataTK[index].amount*dataTK[index].C50TK
        }else
        if(dataTK[index].amount>=100 && dataTK[index].amount<200){
          dataTK[index].amount=amount.value;dataTK[index].cost=dataTK[index].amount*dataTK[index].C100TK
        }else
        if(dataTK[index].amount>=200){
          dataTK[index].amount=amount.value;dataTK[index].cost=dataTK[index].amount*dataTK[index].C200TK
        }else{
          dataTK[index].amount=amount.value;dataTK[index].cost=dataTK[index].amount*dataTK[index].costper1
         }
    }else if(dataTK[index].id==1){
      let test=new SelectTicketsComponent(this.route,this.http).data
      dataTK[index].amount=amount.value;
      dataTK[index].cost=amount.value*test.gokart.type[dataTK[index].typeindex].cost;
      // dataTK[index].cost=dataTK[index].amount
    }else {
      let test=new SelectTicketsComponent(this.route,this.http).data
      dataTK[index].amount=amount.value;
      dataTK[index].cost=amount.value*test.waterP.type[dataTK[index].typeindex].cost;
    }
  this.Subtotal=0;
  dataTK.forEach((item: any)=>{
    this.Subtotal+= item.cost
  })
    localStorage.setItem('currentTicket',JSON.stringify(dataTK))
    // let check:any=localStorage.getItem('currentTicket')
    // let test2=JSON.parse(check)
    // console.log(test2)
    window.location.replace(`${this.urlWeb}cart`);
  }
  checkout1=''
  Checkout(prt:any){
    // data-bs-toggle="modal"
    // data-bs-target="#exampleModal"
    // prt.target.attributes[2] & [3]
    let login=true
    if(login){
     this.checkout1='block'
    }else{
      this.checkout1='none'
    }
    // console.log(prt.target.attributes[2])
  }

  url='https://app-t2204m-eprojet.herokuapp.com/'
  urltest='http://localhost:1234/'
  urlpagetest='http://localhost:4200/'
  urlWeb='https://eproject-team.web.app/'

  deleteTicket:ticket={
    id: 0,
    amount: 0,
    costper1: 0,
    name: '',
    datepick: '',
    cost: 0,
    typeindex: 0
  };
  deleteTKbutn(index:any){
    let data:any[]=this.getTK();
    this.deleteTicket=data[index]
    console.log(data)
    console.log(data[index])
  }
  dltTickets(id:any){
    let data:any[]=this.getTK();
    console.log(id)
    for(let i in data){
      console.log(data[i].id)
      if(data[i].id==id){
        data.splice(parseInt(i),1)
        localStorage.setItem('currentTicket',JSON.stringify(data))
        let check:any=localStorage.getItem('currentTicket')
        let test2=JSON.parse(check)
        console.log(test2)

        break;
      }
    }
    window.location.replace(`${this.urlWeb}cart`);
  }
}
