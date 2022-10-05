import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-cpn-checkout',
  template: `<div style="padding: 10px;background:url('https://cdn1.parksmedia.wdprapps.disney.com/media/layout/assets/themes/wdw-50th/textures/nav-textures/nav_texture_1920.png'),#FFFBF5;"><div class="container text-center" [style]="main">
  <div><i class="far fa-check-circle" style="font-size: 102px;" [style.color]="color"></i>
      <h1>Thank you for using our online ticketing service</h1>
      <p class="fs-5" >View ticket information in your <a routerLink="/profile">profile</a></p>
      <p class="fs-6" style="color: #919191;">©2022 Keansburg Amusement Park - Keansburg, New Jersey, USA</p>
  </div>
</div></div>`,
})
export class CkOutCplComponent implements OnInit {
// far fa-thumbs-up #2973e1 -- far fa-check-circle color: #1f9323;
main=`height: 67vh;display: flex;align-items: center;justify-content: center;    padding: 10pxpx;background: white;box-shadow:rgb(159 159 159) -5px 5px 8px;`
  constructor(private http:HttpClient,private route:ActivatedRoute,private router: Router) {
  }
  icon='far fa-thumbs-up';
  color='#1f9323'
  ngOnInit(): void {
  }

}
