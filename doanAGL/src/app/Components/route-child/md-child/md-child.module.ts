import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdChildRoutingModule } from './md-child-routing.module';
import { ChildAComponent } from '../child-a/child-a.component';
import { ChildBComponent } from '../child-b/child-b.component';


@NgModule({
  declarations: [
    ChildAComponent,
    ChildBComponent
  ],
  imports: [
    CommonModule,
    MdChildRoutingModule
  ]
})
export class MdChildModule { }
