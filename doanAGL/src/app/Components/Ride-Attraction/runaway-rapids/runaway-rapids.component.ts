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
  }

}
