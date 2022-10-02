import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpn-booking',
  templateUrl: './cpn-booking.component.html',
  styleUrls: ['./cpn-booking.component.scss']
})
export class CpnBookingComponent implements OnInit {
  public isCollapsed = false;
  public isCollapsed1 = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  constructor() { }

  ngOnInit(): void {

  }
  collapsetoggle(index:any){
    if(index==0){
      this.isCollapsed=  this.isCollapsed=false?true:false;
      this.isCollapsed1=true;this.isCollapsed2=true;this.isCollapsed3=true
    }else if(index==1){
      this.isCollapsed1=  this.isCollapsed1=false?true:false;
      this.isCollapsed=true;this.isCollapsed2=true;this.isCollapsed3=true
    }else if(index==2){
      this.isCollapsed2=  this.isCollapsed2=false?true:false;
      this.isCollapsed=true;this.isCollapsed1=true;this.isCollapsed3=true
    }else{
      this.isCollapsed3=  this.isCollapsed3=false?true:false;
      this.isCollapsed=true;this.isCollapsed1=true;;this.isCollapsed2=true
    }
  }

}
