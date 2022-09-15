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
import { RegitsterComponent } from './Components/regitster/regitster.component';
import { PracticesComponent } from './Components/tester/test.component';
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
  // {path:"login",loadChildren: () => import('./Components/route-child/md-child/md-child.module').then(m => m.MdChildModule)},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegitsterComponent},
  {path:"test",component:PracticesComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
