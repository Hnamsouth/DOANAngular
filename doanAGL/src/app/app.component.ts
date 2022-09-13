import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  slideImage='assets/img/avatars/avatar2.jpg'
  title = 'doanAGL';

  ar1=[1,2,3,4,5,6];
  ar2=['a','s','b']


  constructor(private route:ActivatedRoute,private http:HttpClient){
    // get params user/:id  -> values= vl['id']
    // this.route.params.subscribe(vl=>{
    //   console.log(vl)
    // })
    // this.route.children.forEach(vl=>{
    //   console.log(vl)
    // })
  }
}
