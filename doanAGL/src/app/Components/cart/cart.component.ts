import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectTicketsComponent } from '../ticket/parktickets/select-tickets/select-tickets.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  userTicket:any[]=[];
  Subtotal:number=0.0;
  constructor( private route:Router) {
    this.getTK();
   }

  ngOnInit(): void {
  }

  getTK(){
    let check:any=localStorage.getItem('currentTicket')
    let test=JSON.parse(check)
    this.userTicket=test;
    this.userTicket.forEach(item=>{
      this.Subtotal+=item.cost
    })
    // console.log(test)
    return test;
  }
  changeamountTK(amount:any,index:any){
    let dataTK=this.getTK()
    let test=new SelectTicketsComponent(this.route).data
    // console.log(test.gokart.type[1])
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
          dataTK[index].amount=amount.value;dataTK[index].cost=dataTK[index].amount*dataTK[index].stdCost
         }
    }else if(dataTK[index].id==1){
      let test=new SelectTicketsComponent(this.route).data
      dataTK[index].amount=amount.value;
      dataTK[index].cost=amount.value*test.gokart.type[1].cost;
      // dataTK[index].cost=dataTK[index].amount
    }else {
      let test=new SelectTicketsComponent(this.route).data
      dataTK[index].amount=amount.value;
      dataTK[index].cost=amount.value*test.waterP.type[1].cost;
    }
  this.Subtotal=0;
  dataTK.forEach((item: any)=>{
    this.Subtotal+= item.cost
  })
    localStorage.setItem('currentTicket',JSON.stringify(dataTK))
    let check:any=localStorage.getItem('currentTicket')
    let test2=JSON.parse(check)
    console.log(test2)

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
}
