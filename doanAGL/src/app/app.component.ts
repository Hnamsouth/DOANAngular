import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navsvg='assets/svg/nav.svg'
  slideImage='assets/img/avatars/avatar2.jpg'
  title = 'doanAGL-t2204m';

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
  check=500

  onActivate(event:any) {
    // window.scroll(0,0);

    // window.scroll({
    //         top: 0,
    //         left: 0,
    //         behavior: 'smooth'
    //  });
    //or document.body.scrollTop = 0;
     //or document.querySelector('body').scrollTo(0,0)
 }
}
