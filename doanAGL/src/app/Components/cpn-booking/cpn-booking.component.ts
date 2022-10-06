import { Component, OnInit } from '@angular/core';
import { ServiService } from '../servi.service';

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
  public isCollapsed4 = false;
  public isCollapsed5 = true;
  public isCollapsed6 = true;

  iconBank=[
    'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/195/123/75/dam/global/cards/dvis-3x.png?1660199125355',
    'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/195/123/75/vision-dam/digital/parks-platform/parks-standard-assets/global/cards/visa2022.png?2022-03-17T22:14:50+00:00',
    'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/195/123/75/dam/global/cards/mas-3x.png?1660199125355',
    'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/195/123/75/dam/global/cards/dnn-3x.png?1660199125354',
    'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/195/123/75/dam/global/cards/amx-3x.png?1660199125356',
    'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/195/123/75/dam/global/cards/din-3x.png?1660199125354',
    'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/195/123/75/dam/global/cards/jcb-3x.png?1660199125354'
  ]
  constructor(private servi:ServiService) {
    if(!this.servi.getuser()){
      window.location.replace(`${this.servi.urlWeb}/login`)
    }
   }

  dataticket=this.servi.getticket()
  subtotal=this.servi.Subtotalall()
  tax=this.servi.tax
  ngOnInit(): void {
    console.log(this.dataticket)
  }

  collapsetoggle(index:any){
    if(index==0){
      this.isCollapsed=  this.isCollapsed==false?true:false;
      this.isCollapsed1=true;this.isCollapsed2=true;this.isCollapsed3=true
    }else if(index==1){
      this.isCollapsed1=  this.isCollapsed1==false?true:false;
      this.isCollapsed=true;this.isCollapsed2=true;this.isCollapsed3=true
    }else if(index==2){
      this.isCollapsed2=  this.isCollapsed2==false?true:false;
      this.isCollapsed=true;this.isCollapsed1=true;this.isCollapsed3=true
    }else if(index==3){
      this.isCollapsed3=  this.isCollapsed3==false?true:false;
      this.isCollapsed=true;this.isCollapsed1=true;;this.isCollapsed2=true
    }else if(index==4){
      this.isCollapsed4=  this.isCollapsed4==false?true:false;
      this.isCollapsed5=true;this.isCollapsed6=true;
    }else if(index==5){
      this.isCollapsed5=  this.isCollapsed5==false?true:false;
      this.isCollapsed4=true;this.isCollapsed6=true;
    }else if(index==6){
      this.isCollapsed6=  this.isCollapsed6==false?true:false;
      this.isCollapsed4=true;this.isCollapsed5=true;
    }
  }
  changeemail1=false;
  changeAddress=false;

  changeemail(index:any){
    if(index==0){
      this.changeemail1=true

    }else if(index==1){
      this.changeAddress=true
    }
  }
viewTK=true
iconview='down'
  toggleviewTK(){
    this.viewTK=this.viewTK==true?false:true;
    this.iconview=this.viewTK==true?'down':'up';
  }

}
