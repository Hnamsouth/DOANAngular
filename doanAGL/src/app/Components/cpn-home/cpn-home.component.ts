import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


// declare var init:any;
// declare var attachListeners:any;
@Component({
  selector: 'app-cpn-home',
  templateUrl: './hom-backup.html',
  // ./cpn-home.component.html
  styleUrls: ['./cpn-home.component.scss']
})
export class CpnHomeComponent implements OnInit {
  icon_play_pause='bi bi-pause-circle'
  // bi bi-play-circle
  constructor() {
  }
  @ViewChild("videoPlayer", { static: false })
  videoplayer!: ElementRef;
  isPlay: boolean = false;

  playPause() {
    var myVideo: any = document.getElementById("my_video_1");
    if (myVideo.paused){
       myVideo.play();this.icon_play_pause='bi bi-pause-circle'
      }else {
        myVideo.pause();this.icon_play_pause='bi bi-play-circle'
      };
  }
  volume2(vl:any){
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.volume=vl.value/100;
    console.log(myVideo.volume)
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
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.play()
  }

}
