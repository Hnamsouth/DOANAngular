import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpn-booking',
  templateUrl: './cpn-booking.component.html',
  styleUrls: ['./cpn-booking.component.scss']
})
export class CpnBookingComponent implements OnInit {
  public isCollapsed = false;
  constructor() { }

  ngOnInit(): void {
  }

}
