import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-tickets',
  templateUrl: './select-tickets.component.html',
  styleUrls: ['./select-tickets.component.scss']
})
export class SelectTicketsComponent implements OnInit {
  curentDate:any|undefined

  constructor() { }

  ngOnInit(): void {
    // getUTCDay()
    this.curentDate= new Date().toLocaleDateString()
  }

  data={
    rides:{amount:0,date:'',stdCost:1.25,C50TK:0.9,C100TK:0.79,C200TK:0.745},
    gokart:{amount:0,date:'',typePick:0,type:[
      {id:0,name:'Adult Track',cost:7.95},
      {id:1,name:'Double Seater',cost:9.95},
      {id:2,name:'Kiddie Track',cost:4.95},
      {id:3,name:'Book of 4 Adult Rides',cost:29.95},
      {id:4,name:'Book of 8 Adult Rides',cost:49.95}
    ]},
    waterP:{amount:0,date:'',typePick:0,type:[
      {id:0,name:'Water park for Adult',cost:37},
      {id:1,name:'Water park for Kids',cost:19},
      {id:2,name:'Dry Spectators',cost:15},
    ]},
    combo:{amount:0,date:new Date().toLocaleDateString()}
  }
  ticketPickDone:any[]=[];

  subticket(amount:number,index:number){
if(index==0){this.data.rides.amount= this.data.rides.amount<=0?0:this.data.rides.amount<amount?0:this.data.rides.amount-=amount;}else
if(index==1){this.data.gokart.amount= this.data.gokart.amount<=0?0:this.data.gokart.amount<amount?0:this.data.gokart.amount-=amount;}else
if(index==2){this.data.waterP.amount= this.data.waterP.amount<=0?0:this.data.waterP.amount<amount?0:this.data.waterP.amount-=amount;}else{
  this.data.combo.amount= this.data.combo.amount<=0?0:this.data.combo.amount<amount?0:this.data.combo.amount-=amount;
}

  }
  addticket(amount:number,index:number){
    if(index==0){this.data.rides.amount+=amount;}else
if(index==1){this.data.gokart.amount+=amount;}else
if(index==2){this.data.waterP.amount+=amount;}else{
  this.data.combo.amount+=amount;
}
  }
  DridesTK(date:any,index:number){
    if(index==0){this.data.rides.date=date.value;}else
    if(index==1){this.data.gokart.date=date.value;}else
    if(index==2){this.data.waterP.date=date.value;}else{
      this.data.combo.date=date.value;
    }
  }
  TKtype(type:any,index:number){
    let ind=type.target[index].value
    if(index==0){
      this.data.gokart.typePick=type.value;
    }
    else{
      this.data.waterP.typePick=type.value;}
  }
  pickticket(index:number){
    var {rides}=this.data

      if(index==0){
        let  rides=this.data.rides
        if(rides.amount!==0 && rides.date!==''){
          console.log("---------"+rides.date)
          if(rides.amount>=50 && rides.amount<100){
            var data:any[]=[{amount:rides.amount,costper1:rides.C50TK,datepick:rides.date,cost:rides.amount*rides.C50TK}];this.ticketPickDone.push(data);
           }else
           if(rides.amount>=100 && rides.amount<200){
            var data:any[]=[{amount:rides.amount,costper1:rides.C100TK,datepick:rides.date,cost:rides.amount*rides.C100TK}];this.ticketPickDone.push(data);
           }else
           if(rides.amount>=200){
            var data:any[]=[{amount:rides.amount,costper1:rides.C200TK,datepick:rides.date,cost:rides.amount*rides.C200TK}];this.ticketPickDone.push(data);
           }else{
            var data:any[]=[{amount:rides.amount,costper1:rides.stdCost,datepick:rides.date,cost:rides.amount*rides.stdCost}];this.ticketPickDone.push(data);
           }
        }else{ alert("faild rides")}
     }
     else if(index==1){
      var gokart1=this.data.gokart
      if(this.data.gokart.amount!==0 && this.data.gokart.date!==''){
        var data:any[]=[{amount:gokart1.amount,costper1:gokart1.type[gokart1.typePick].cost,type:gokart1.type[gokart1.typePick].name,datepick:gokart1.date,cost:gokart1.amount*gokart1.type[gokart1.typePick].cost}]
        this.ticketPickDone.push(data);
      }else{ alert("faild gokart")}}
     else if(index==2){
      var waterP=this.data.waterP
      if(this.data.waterP.amount!==0 && this.data.waterP.date!==''){
        var data:any[]=[{amount:waterP.amount, costper1:waterP.type[waterP.typePick].cost, type:waterP.type[waterP.typePick].name,datepick:waterP.date,cost:waterP.amount*waterP.type[waterP.typePick].cost}]
          this.ticketPickDone.push(data);
      }else{ alert("faild waterP")}}
     else{
      if(this.data.combo.amount!==0 && this.data.combo.date!==''){

      }else{ alert("faild combo")}
       let combo=this.data.combo
     }
  console.log(this.ticketPickDone)

  }

}
