import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiService } from '../servi.service';
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
  constructor( private route:Router,private http:HttpClient,private servi:ServiService) {
    this.Subtotal=this.servi.Subtotalall()
    this.userTicket=this.servi.getticket()
    this.checkUseRLogin()
   }

  ngOnInit(): void {
  }

  checkUseRLogin(){
    let user:any=localStorage.getItem('user')
    if(user){
      this.statusUser=false
    }
  }


  changeamountTK(amount:any,index:any){
    let dataTK=this.servi.getticket()
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
      let test=this.servi.typedataticket
      dataTK[index].amount=amount.value;
      dataTK[index].cost=amount.value*test.gokart.type[dataTK[index].typeindex].cost;
      // dataTK[index].cost=dataTK[index].amount
    }else {
      let test=this.servi.typedataticket
      dataTK[index].amount=amount.value;
      dataTK[index].cost=amount.value*test.waterP.type[dataTK[index].typeindex].cost;
    }
  this.Subtotal=0;
  dataTK.forEach((item: any)=>{
    this.Subtotal+= item.cost
  })
    localStorage.setItem('currentTicket',JSON.stringify(dataTK))
    window.location.replace(`${this.servi.urlWeb}cart`);
  }
  checkout1=''
  Checkout(prt:any){
    let login=true
    if(login){
     this.checkout1='block'
    }else{
      this.checkout1='none'
    }
  }



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
    let data:any[]=this.servi.getticket()
    this.deleteTicket=data[index]
  }
  dltTickets(id:any){
    let data:any[]=this.servi.getticket()
    for(let i in data){
      if(data[i].id==id){
        data.splice(parseInt(i),1)
        this.servi.setticket(data)
        break;
      }
    }
    window.location.replace(`${this.servi.urlWeb}cart`);
  }
}
