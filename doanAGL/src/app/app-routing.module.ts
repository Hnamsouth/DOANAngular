import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CpnAboutusComponent } from './Components/cpn-aboutus/cpn-aboutus.component';
import { CpnBookingComponent } from './Components/cpn-booking/cpn-booking.component';
import { CpnContactUsComponent } from './Components/cpn-contact-us/cpn-contact-us.component';
import { CpnEntertainmentComponent } from './Components/cpn-entertainment/cpn-entertainment.component';
import { CpnGalleryComponent } from './Components/cpn-gallery/cpn-gallery.component';
import { CpnHomeComponent } from './Components/cpn-home/cpn-home.component';
import { CpnRestaurantComponent } from './Components/cpn-restaurant/cpn-restaurant.component';
import { CpnItemRTRComponent } from './cpn-item-rtr/cpn-item-rtr.component';

const routes: Routes = [
  {path:'',component:CpnHomeComponent},
  {path:"aboutus",component:CpnAboutusComponent},
  {path:"contactus",component:CpnContactUsComponent},
  {path:"booking",component:CpnBookingComponent},
  {path:"enterainment",component:CpnEntertainmentComponent},
  {path:"restaurant",component:CpnRestaurantComponent},
  {path:"RTSitems/:id",component:CpnItemRTRComponent}, //  get id with route params
  {path:"RTSitems2",component:CpnItemRTRComponent,data:{name:'hoang'}}, //  get id with body
  {path:"galley",component:CpnGalleryComponent},
  {path:"home",component:CpnHomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
