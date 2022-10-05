import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CpnAboutusComponent } from './Components/cpn-aboutus/cpn-aboutus.component';
import { CpnBookingComponent } from './Components/cpn-booking/cpn-booking.component';
import { CpnContactUsComponent } from './Components/cpn-contact-us/cpn-contact-us.component';
import { CpnEntertainmentComponent } from './Components/cpn-entertainment/cpn-entertainment.component';
import { CpnGalleryComponent } from './Components/cpn-gallery/cpn-gallery.component';
import { CpnHomeComponent } from './Components/cpn-home/cpn-home.component';
import { CpnRestaurantComponent } from './Components/cpn-restaurant/cpn-restaurant.component';
import { LoginComponent } from './Components/login/login.component';
import { CheckverifyComponent } from './Components/regitster/checkverify.component';
import { RegitsterComponent } from './Components/regitster/regitster.component';
import { PracticesComponent } from './Components/tester/test.component';
import { CpnItemRTRComponent } from './Components/cpn-item-rtr/cpn-item-rtr.component';
import { FoodDetailComponent } from './Components/cpn-restaurant/conFoodDetail.component';
import { RunawayRapidsComponent } from './Components/Ride-Attraction/runaway-rapids/runaway-rapids.component';
import { TicketComponent } from './Components/ticket/ticket.component';
import { RideAttractionMainComponent } from './Components/Ride-Attraction/ride-attraction-main/ride-attraction-main.component';
import { InfomationComponent } from './Components/infomation/infomation.component';
import { ParkticketsComponent } from './Components/ticket/parktickets/parktickets.component';
import { SelectTicketsComponent } from './Components/ticket/parktickets/select-tickets/select-tickets.component';
import { CartComponent } from './Components/cart/cart.component';
import { ArcadesComponent } from './Components/Ride-Attraction/arcades/arcades.component';
import { HistoryComponent } from './Components/infomation/history/history.component';
import { HollowgravesHauntedComponent } from './Components/Ride-Attraction/hollowgraves-haunted/hollowgraves-haunted.component';
import { CkOutCplComponent } from './Components/cpn-booking/ckout_complete.component';
import { BeachComponent } from './Components/Ride-Attraction/beach/beach.component';
import { FishingPierComponent } from './Components/Ride-Attraction/fishing-pier/fishing-pier.component';
import { GokartsComponent } from './Components/Ride-Attraction/gokarts/gokarts.component';

const routes: Routes = [
  {path:'',component:CpnHomeComponent},
  {path:"aboutus",component:CpnAboutusComponent},
  {path:"contactus",component:CpnContactUsComponent},
  {path:"checkout-booking",component:CpnBookingComponent},
  {path:"check-out-complete",component:CkOutCplComponent},
  {path:"enterainment",component:CpnEntertainmentComponent},
  {path:"restaurant",component:CpnRestaurantComponent},
  {path:'restaurant/shop/:id',component:FoodDetailComponent},
  {path:"RTSitems/:id",component:CpnItemRTRComponent}, //  get id with route params
  {path:"RTSitems2",component:CpnItemRTRComponent,data:{name:'hoang'}}, //  get id with body
  {path:"galley",component:CpnGalleryComponent},
  {path:"home",component:CpnHomeComponent},
  // {path:"login",loadChildren: () => import('./Components/route-child/md-child/md-child.module').then(m => m.MdChildModule)},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegitsterComponent},
  {path:"test",component:PracticesComponent},
  {path:"checkverify",component:CheckverifyComponent},
  {path:"ticket", children:[
    {path:"",component:TicketComponent},
    {path:'park-tickets',children:[
      {path:'',component:ParkticketsComponent},
      {path:'select-tickets',component:SelectTicketsComponent}
    ]}
  ]},
  {path:'select-tickets',redirectTo:'ticket/park-tickets/select-tickets'},
  {path:"ride-attraction",component:RideAttractionMainComponent},
  {path:"arcades",component:ArcadesComponent},
  {path:"information",component:InfomationComponent},
  {path:'history',component:HistoryComponent},
  {path:"cart",component:CartComponent},
  {path:"runaway-rapids",component:RunawayRapidsComponent},
  {path:"hollowgraves-haunted",component:HollowgravesHauntedComponent},
  {path:"beach",component:BeachComponent},
  {path:"fishing-pier",component:FishingPierComponent},
  {path:"go-karts",component:GokartsComponent},

]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
