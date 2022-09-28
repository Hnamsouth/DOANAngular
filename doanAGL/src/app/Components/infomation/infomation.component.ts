import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-infomation',
  templateUrl: './infomation.component.html',
  styleUrls: ['./infomation.component.scss']
})
export class InfomationComponent implements OnInit {

  icon_play_pause='bi bi-pause-circle'
  // bi bi-play-circle
  constructor() {
  }
  @ViewChild("videoPlayer", { static: false })
  videoplayer!: ElementRef;
  isPlay: boolean = false;
  widthvideo='70vh'
  fullscreen(){
   if(this.widthvideo=='70vh'){
     this.widthvideo='100vh'
   }else{
     this.widthvideo='70vh'
   }
  }

  ngOnInit(): void {

  }


}
