import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }
  playPause() {
    var myVideo: any = document.getElementById("my_video_1");
    if (myVideo.paused){
       myVideo.play();this.icon_play_pause='bi bi-pause-circle'
      }else {
        myVideo.pause();this.icon_play_pause='bi bi-play-circle'
      };
  }
  volume(){
    var myVideo: any = document.getElementById("my_video_1");
    console.log(myVideo.volume)
  }
  volume2(vl:any){
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.volume=vl.value/100;
    console.log(myVideo.volume)
  }
  fullscreen(){
    var myVideo: any = document.getElementById("my_video_1");
    // myVideo.height=1800;myVideo.width=2300;
    myVideo.fullscreen()
  }
  makeBig() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 560;
  }

  makeSmall() {
    var myVideo: any = document.getElementById("my_video_1");
    // myVideo.width = 320;
    myVideo.volume+=0.025
    // console.log(myVideo.volume)
  }

  makeNormal() {
    var myVideo: any = document.getElementById("my_video_1");
    // myVideo.width = 420;
    myVideo.volume-=0.025
  }

  skip(value:any) {
    let video: any = document.getElementById("my_video_1");
    video.currentTime += value;
  }

  restart() {
    let video: any = document.getElementById("my_video_1");
    video.currentTime = 0;
  }

  ngOnInit(): void {
  }

}
