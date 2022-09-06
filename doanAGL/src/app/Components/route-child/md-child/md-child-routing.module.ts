import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../login/login.component';


import { ChildAComponent } from '../child-a/child-a.component';
import { ChildBComponent } from '../child-b/child-b.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path:'child-a',component:ChildAComponent},
  {path:'child-b',component:ChildBComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MdChildRoutingModule { }
