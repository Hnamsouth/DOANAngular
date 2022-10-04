import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-runaway-rapids',
  templateUrl: './runaway-rapids.component.html',
  styleUrls: ['./runaway-rapids.component.scss']
})
export class RunawayRapidsComponent implements OnInit {
  currentdate:any;
  constructor() {
   }
  widthvideo='70vh'
timef='10:00'
timet='5:00'
   fullscreen(){
    if(this.widthvideo=='70vh'){
      this.widthvideo='109.5vh'
    }else{
      this.widthvideo='70vh'
    }
   }
  ngOnInit(): void {
this.currentdate=new Date().toDateString()
  }
  changedate(date:any){
    this.currentdate= new Date(date.value).toDateString()
    let index=new Date(date.value).getDay()
    console.log(index)
    if(index==0 || index==6){
      this.timef='8:00';this.timet='9:30'
    }else{
      this.timef='10:00';this.timet='5:00'
    }
  }

}
