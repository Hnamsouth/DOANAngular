import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-runaway-rapids',
  templateUrl: './runaway-rapids.component.html',
  styleUrls: ['./runaway-rapids.component.scss']
})
export class RunawayRapidsComponent implements OnInit {
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
  }

}
