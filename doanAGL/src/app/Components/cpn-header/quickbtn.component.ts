import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpn-quickbtn',
  template:  `<div>
  <ul id="togg">
      <li>
          <a routerLink="/">
              <i class="fa fa-home"></i>
          </a>
      </li>
      <li>
          <a routerLink="/ticket">
              <i class="bi bi-ticket-perforated-fill"></i>
          </a>
      </li>
      <li>
          <a routerLink="/login">
              <i class="fa fa-users"></i>
          </a>
      </li>
      <li>
          <a routerLink="/">
              <i class="bi bi-patch-question-fill"></i>
          </a>
      </li>
      <li>
          <a href="/information">
              <i class="bi bi-info-circle-fill"></i>
          </a>
      </li>
      <li>
          <a href="/ride-attraction">
              <i class="fa fa-gamepad"></i>
          </a>
      </li>
      <li class="close" (click)="closebtn()">
          <a type="button">
              <i class="bi bi-gear"></i>
          </a>
      </li>
  </ul>
</div>`,
  styleUrls: ['./cpn-header.component.scss']
})
export class QuickBtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  closebtn(){
    let list= document.getElementById('togg')
    list?.classList.toggle('active')
   }
}
