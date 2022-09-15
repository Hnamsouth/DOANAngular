import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CpnHeaderComponent } from './Components/cpn-header/cpn-header.component';
import { ConFooterComponent } from './Components/con-footer/con-footer.component';
import { CpnHomeComponent } from './Components/cpn-home/cpn-home.component';
import { CpnRestaurantComponent } from './Components/cpn-restaurant/cpn-restaurant.component';
import { CpnBookingComponent } from './Components/cpn-booking/cpn-booking.component';
import { CpnEntertainmentComponent } from './Components/cpn-entertainment/cpn-entertainment.component';
import { CpnGalleryComponent } from './Components/cpn-gallery/cpn-gallery.component';
import { CpnAboutusComponent } from './Components/cpn-aboutus/cpn-aboutus.component';
import { CpnContactUsComponent } from './Components/cpn-contact-us/cpn-contact-us.component';
import { CpnItemRTRComponent } from './cpn-item-rtr/cpn-item-rtr.component';
import { LoginComponent } from './Components/login/login.component';
import { RegitsterComponent } from './Components/regitster/regitster.component';

import { AgmCoreModule } from '@agm/core';
import { NgbdRatingEvents } from './Components/login/rating.component';

import {NgbPaginationModule, NgbAlertModule,NgbNavModule,NgbCarouselModule,NgbRatingModule,NgbDropdownModule,NgbAccordionModule,NgbPopoverModule,NgbCollapseModule,NgbDatepickerModule,NgbModalModule,NgbOffcanvasModule,NgbProgressbarModule,NgbToastModule,NgbTooltipModule,NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import { PracticesComponent } from './Components/tester/test.component';
import { CommonModule } from '@angular/common';
const ngbt=[NgbPaginationModule, NgbAlertModule,NgbNavModule,NgbCarouselModule,NgbRatingModule,NgbDropdownModule,NgbAccordionModule,NgbPopoverModule,NgbCollapseModule,NgbDatepickerModule,NgbModalModule,NgbOffcanvasModule,NgbProgressbarModule,NgbToastModule,NgbTooltipModule,NgbTypeaheadModule]



@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw',
      libraries: ['places']
    }),
    ...ngbt,
    CommonModule

  ],
  declarations: [
    AppComponent,
    CpnHeaderComponent,
    ConFooterComponent,
    CpnHomeComponent,
    CpnRestaurantComponent,
    CpnBookingComponent,
    CpnEntertainmentComponent,
    CpnGalleryComponent,
    CpnAboutusComponent,
    CpnContactUsComponent,
    CpnItemRTRComponent,
    LoginComponent,
    RegitsterComponent,
    NgbdRatingEvents,
    PracticesComponent


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
