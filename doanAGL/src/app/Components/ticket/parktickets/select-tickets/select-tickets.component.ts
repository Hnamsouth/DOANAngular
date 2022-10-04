import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CpnHeaderComponent } from 'src/app/Components/cpn-header/cpn-header.component';
import { ServiService } from 'src/app/Components/servi.service';

@Component({
  selector: 'app-select-tickets',
  templateUrl: './select-tickets.component.html',
  styleUrls: ['./select-tickets.component.scss']
})
export class SelectTicketsComponent implements OnInit {
  dateck=false
  constructor(private router: Router,private http:HttpClient,private servi:ServiService) {

   }


   widthvideo=`70vh`
   fullscreen(){
     const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
     let heiight=document.getElementById('img-hd')?.offsetHeight;
     console.log(vh +"2" +heiight)
    if(this.widthvideo=='70vh'){
      this.widthvideo='100vh'
    }else{
      this.widthvideo='70vh'
    }
   }


  ngOnInit(): void {
  }
  Subtotal:number=0;
  data={
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
  ticketPickDone:any[]=[];

  subticket(amount:number,index:number){
    if(index==0){this.data.rides.amount= this.data.rides.amount<=0?0:this.data.rides.amount<amount?0:this.data.rides.amount-=amount}else
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
    let fcdate=new Date(date.value).toDateString()

    if(index==0){this.data.rides.date=fcdate;}else
    if(index==1){this.data.gokart.date=fcdate;}else
    if(index==2){this.data.waterP.date=fcdate;}else{
      this.data.combo.date=date.value;
    }
    let datecheck=new Date(date.value).getDay()
    if(datecheck==6 || datecheck==0){this.dateck=true}else{this.dateck=false}
  }
  TKtype(type:any,index:number){
    if(index==0){
      this.data.gokart.typePick=type.value;
      console.log(this.data.gokart.typePick)
    }
    else{
      this.data.waterP.typePick=type.value;
      console.log(this.data.waterP.typePick)}
  }
  pickticket(index:number){
      if(index==0){
        let  ridesdata=this.data.rides
        let test=0
        if(ridesdata.amount!==0 && ridesdata.date!==''){
          let datecheck=new Date(ridesdata.date).getDay()
          if(datecheck==6 || datecheck==0){ test= ridesdata.stdCost*9/100}else{test==0}
          if(ridesdata.amount>=50 && ridesdata.amount<100){
            var data:any[]=[{id:0,amount:ridesdata.amount,costper1:ridesdata.C50TK+test,name:'Rides',datepick:ridesdata.date,cost:ridesdata.amount*(ridesdata.C50TK+test)}];this.ticketPickDone.push(data);this.Subtotal+=data[0].cost;
          }else
          if(ridesdata.amount>=100 && ridesdata.amount<200){
            var data:any[]=[{id:0,amount:ridesdata.amount,costper1:ridesdata.C100TK+test,name:'Rides',datepick:ridesdata.date,cost:ridesdata.amount*(ridesdata.C100TK+test)}];this.ticketPickDone.push(data);this.Subtotal+=data[0].cost;
          }else
          if(ridesdata.amount>=200){
            var data:any[]=[{id:0,amount:ridesdata.amount,costper1:ridesdata.C200TK+test,name:'Rides',datepick:ridesdata.date,cost:ridesdata.amount*(ridesdata.C200TK+test)}];this.ticketPickDone.push(data);this.Subtotal+=data[0].cost;
          }else{
            var data:any[]=[{id:0,amount:ridesdata.amount,costper1:ridesdata.stdCost+test,name:'Rides',datepick:ridesdata.date,cost:ridesdata.amount*(ridesdata.stdCost+test)}];this.ticketPickDone.push(data);this.Subtotal+=data[0].cost;}
        }else{ alert("faild rides")}
      }else if(index==1){
        let test=0
        var gokart1=this.data.gokart
        if(this.data.gokart.amount!==0 && this.data.gokart.date!==''){
          let datecheck=new Date(gokart1.date).getDay()
          if(datecheck==6 || datecheck==0){ test= gokart1.type[gokart1.typePick].cost*9/100}else{test==0}
          var data:any[]=[{id:1,amount:gokart1.amount,costper1:gokart1.type[gokart1.typePick].cost+test,name:gokart1.type[gokart1.typePick].name,datepick:gokart1.date,cost:gokart1.amount*(gokart1.type[gokart1.typePick].cost+test),typeindex:gokart1.typePick}]
          this.ticketPickDone.push(data);this.Subtotal+=data[0].cost;
        }else{ alert("faild gokart")}}
      else if(index==2){
        let test=0
        var waterP=this.data.waterP

        if(this.data.waterP.amount!==0 && this.data.waterP.date!==''){
          let datecheck=new Date(waterP.date).getDay()
          if(datecheck==6 || datecheck==0){
            test=waterP.type[waterP.typePick].cost*9/100
          }else{
            test=0
          }
          var data:any[]=[{id:2,amount:waterP.amount, costper1:waterP.type[waterP.typePick].cost+test, name:waterP.type[waterP.typePick].name,datepick:waterP.date,cost:waterP.amount*(waterP.type[waterP.typePick].cost+test),typeindex:waterP.typePick}]
            this.ticketPickDone.push(data);this.Subtotal+=data[0].cost;
        }else{ alert("faild waterP")}}
      else{
      if(this.data.combo.amount!==0 && this.data.combo.date!==''){

      }else{ alert("faild combo")}
      let combo=this.data.combo
    }
  }
  submitTK(){

    if(this.ticketPickDone.length!==0){
      let data:any[]=[]
      this.ticketPickDone.forEach(item=>{
        data.push(item[0])
      })
      localStorage.setItem('currentTicket',JSON.stringify(data))

      window.location.replace(`${this.servi.urlWeb}cart`);
    }
  }
  deleteTK(nb:any){
    this.ticketPickDone.forEach((item,index)=>{
      if(index==nb){
        this.ticketPickDone.splice(nb,1)
      }
    })
  }


}
