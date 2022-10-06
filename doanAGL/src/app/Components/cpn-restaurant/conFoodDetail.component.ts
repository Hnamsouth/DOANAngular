import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CpnRestaurantComponent} from'./cpn-restaurant.component'
@Component({
  selector: 'app-FoodDetail',
  templateUrl:'./Fooddetail.html',
  styleUrls:['./foodDetail.scss']
})
export class FoodDetailComponent implements OnInit {
  // option 1
  // @ViewChild(CpnRestaurantComponent)
  // child: CpnRestaurantComponent = new CpnRestaurantComponent;
    // option 2
  child:any = new CpnRestaurantComponent;
  data:any;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(private route: ActivatedRoute, private router: Router) {
    let check=this.route.snapshot.params['id']
    this.data=this.child.dinning
    console.log(this.child.dinning)
   }

  ngOnInit(): void {
    // console.log(check)
  }

}
