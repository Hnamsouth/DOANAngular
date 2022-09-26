import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpn-restaurant',
  templateUrl: './cpn-restaurant.component.html',
  styleUrls: ['./cpn-restaurant.component.scss']
})
export class CpnRestaurantComponent implements OnInit {
  dinning=[
    // {
    //   img:'',
    //   typeoffood:'American\Casual Dining',
    //   name:"",
    //   typeofservice:'Table Service',
    //   located:'',
    //   MealPricing:'$15 to $34.99 per adult',
    //   desciption:{
    //     text:''
    //   }
    // },
    {
      img:'assets/img/food-2/IMG_1661-scaled.jpeg',
      typeoffood:'American\Casual Dining',
      name:"Cheesy’s Pizza: OPEN UNDER NEW OWNERSHIP 2021",
      typeofservice:'Table Service',
      located:'',
      MealPricing:'$15 to $34.99 per adult',
      desciption:{
        text:'Craving some traditional boardwalk pizza? Cheesy’s is the place for you! Toppings include pepperoni, sausage, peppers, onions, and more! Traditional, Sicilian, or garlic knots! Yum!'
      }
    },{
      img:'assets/img/food-2/icecreamwafflecone.jpg',
      typeoffood:'American\Casual Dining',
      name:"Nickerson’s Ice Cream",
      typeofservice:'Table Service',
      located:'',
      MealPricing:'$15 to $34.99 per adult',
      desciption:{
        text:'Nickerson’s Ice cream has been serving freshly made hard ice cream since 1946 . Choose a cone, sundae,milkshake, or our crowd favorite; a famous waffle and ice cream sandwich! The combinations are endless with toppings like hot fudge,caramel, sprinkles, and more!'
      }
    },
    {
      img:'assets/img/food-2/kates-place.jpg',
      typeoffood:'American\Casual Dining',
      name:"CJ’s Spot",
      typeofservice:'Table Service',
      located:'',
      MealPricing:'$15 to $34.99 per adult',
      desciption:{
        text:'Funnel cake &amp; fun traditional Jersey Shore boardwalk food!'
      }
    },
    {
      img:'assets/img/food-2/pexels-photo-604660.jpg',
      typeoffood:'American\Casual Dining',
      name:"Girardi’s Kabobs",
      typeofservice:'Table Service',
      located:'',
      MealPricing:'$15 to $34.99 per adult',
      desciption:{
        text:'Our original Fresh Grilled 1/4lb. Pork &amp; Chicken Kabobs were established here in the park in 1997.<br>Also serving traditional Sabrett Hotdogs and other boardwalk favorites.'
      }
    },
    {
      img:'assets/img/food-2/unspecified-2.jpg',
      typeoffood:'American\Casual Dining',
      name:"Dippin’ Dots",
      typeofservice:'Table Service',
      located:'',
      MealPricing:'$15 to $34.99 per adult',
      desciption:{
        text:'Not your traditional scoop, Dippin Dots is the cool way to enjoy an old favorite. Enjoy several unique flavors of this delicious dot delicacy!'
      }
    },
    {
      img:'assets/img/food-2/shutterstock_82222750.jpg',
      typeoffood:'American\Casual Dining',
      name:"Coastal Ice Cream",
      typeofservice:'Table Service',
      located:'',
      MealPricing:'$15 to $34.99 per adult',
      desciption:{
        text:'Enjoy a boardwalk favorite! Traditional Soft Served Ice Cream! Top off your treat with one of our several delicious toppings or order a Sundae, Thick-Shake, Slushie or Frozen Yogurt!'
      }
    },
    {
      img:'assets/img/food-2/pizza-v.jpg',
      typeoffood:'American\Casual Dining',
      name:"Pizza V",
      typeofservice:'Table Service',
      located:'',
      MealPricing:'$15 to $34.99 per adult',
      desciption:{
        text:'A boardwalk tradition, Pizza V serves classic thin crust Jersey pizza!'
      }
    },
    {
      img:'assets/img/food-2/nickersons.jpg',
      typeoffood:'American\Casual Dining',
      name:"Nickersons",
      typeofservice:'Table Service',
      located:'',
      MealPricing:'$15 to $34.99 per adult',
      desciption:{
        text:'This open air eatery has all of your classic boardwalk favorites from sausage sandwiches and cheesesteaks to hamburgers and hotdogs. You can find something for everyone! And don’t forget to add some delicious cheese fries to your order.'
      }
    },
    {
      img:'assets/img/food-2/shaved-ice.jpg',
      typeoffood:'American\Casual Dining',
      name:"Snowie Hawaiian Shaved Ice",
      typeofservice:'Table Service',
      located:'',
      MealPricing:'$15 to $34.99 per adult',
      desciption:{
        text:'A cool treat on a hot summer day, Snowie shaved ice comes in fun flavors to go!'
      }
    },
    {
      img:'assets/img/food-2/miami-club-raw-bar.jpg',
      typeoffood:'American\Casual Dining',
      name:">Miami Club",
      typeofservice:'Table Service',
      located:'',
      MealPricing:'$15 to $34.99 per adult',
      desciption:{
        text:'Serving up the best seafood, the Miami Club offers a raw bar, seafood, burgers and the best homemade clam chowder in the Bayshore. Stop in for a Sugar Island rum bucket or our twist on the traditional Rum &amp; Coke, an Island &amp;Coke. The Miami Club offers a clean friendly sit-down atmosphere to order up food and drinks.'
      }
    },
    {
      img:'assets/img/food-2/unspecified-1.jpg',
      typeoffood:'American\Casual Dining',
      name:"Heidelberg – Now Open!!",
      typeofservice:'Table Service',
      located:'',
      MealPricing:'$15 to $34.99 per adult',
      desciption:{
        text:"Established in 1934, enjoy one of Keansburg Amusement Park's oldest eateries! Famed hot dogs are again available along with German beer!"
      }
    },
    {
      img:'assets/img/food-2/65969426_2296696633727942_6903619514059980800_n.jpg',
      typeoffood:'American\Casual Dining',
      name:"Sam’s Snack Shack",
      typeofservice:'Table Service',
      located:'',
      MealPricing:'$15 to $34.99 per adult',
      desciption:{
        text:'Short and steep” is the idea behind this slide duo. Anyone who loves a thrill will enjoy the ride as they zip down feet first and drop into the splashdown pool.<br><br>Must be 42″ or taller. Under 48″ must wear a life jacket. Singleriders only. Splash down pool in 10 ft. &nbsp;All non-swimmers and novice swimmers are required to wear a life jacket. &nbsp; Under 42" cannot ride.'
      }
    },
    {
      img:'assets/img/food-2/glenda-great-fries.jpg',
      typeoffood:'American\Casual Dining',
      name:"Glenda’s Great Fries",
      typeofservice:'Table Service',
      located:'',
      MealPricing:'$15 to $34.99 per adult',
      desciption:{
        text:'Warming pool located beneath Mega Bunga Falls where you can take a short respite.<br>Under 42" must wear a life jacket.'
      }
    },
    {
      img:'assets/img/food-2/IMG_2960.jpg',
      typeoffood:'American\Casual Dining',
      name:"Mambo Nando’s : NEW 2021",
      typeofservice:'Table Service',
      located:'',
      MealPricing:'$15 to $34.99 per adult',
      desciption:{
        text:"Mambo Nando's Puerto Rican American cuisine."
      }
    },
    {
      img:'assets/img/food-2/zeppole.jpg',
      typeoffood:'American\Casual Dining',
      name:"Zeppole’s",
      typeofservice:'Table Service',
      located:'',
      MealPricing:'$15 to $34.99 per adult',
      desciption:{
        text:'The absolute best zeppole on the Jersey Shore! Freshly made daily.'
      }
    },
    {
      img:'assets/img/food-2/cottoncandy.jpg',
      typeoffood:'American\Casual Dining',
      name:"Cotton Candy",
      typeofservice:'Table Service',
      located:'',
      MealPricing:'$15 to $34.99 per adult',
      desciption:{
        text:'Serving Cotton Candy, Fresh Lemonade, Churros, Pretzels and Refreshments!'
      }
    },
    {
      img:'assets/img/food-2/fried-chicken-chicken-fried-crunchy-60616.jpg',
      typeoffood:'American\Casual Dining',
      name:"Boardwalk Grill at the Pavilion Bar",
      typeofservice:'Table Service',
      located:'',
      MealPricing:'$15 to $34.99 per adult',
      desciption:{
        text:'Boardwalk Grill at the Pavilion Bar'
      }
    },
    {
      img:'assets/img/food-2/icecream.jpg',
      typeoffood:'American\Casual Dining',
      name:"Flavor Burst",
      typeofservice:'Table Service',
      located:'',
      MealPricing:'$15 to $34.99 per adult',
      desciption:{
        text:'Splash pool from 0″ to 12″ of water with all interactive water play. Short slides that sit next to each. Half the fun is climbing and playing your way to the top before sliding down.'
      }
    },
  ]
  items_service=[
    {
      icon:'https://cdn1.parksmedia.wdprapps.disney.com/media/layout/assets/icons/pep/dining-plan.svg',
      name:'Reservations Accepted'
    },
    {
      icon:'https://cdn1.parksmedia.wdprapps.disney.com/media/layout/assets/icons/pep/adult-table-service.svg',
      name:'Table Service'
    },
    {
      icon:'https://cdn1.parksmedia.wdprapps.disney.com/media/layout/assets/icons/pep/prix-fixe-qsr.svg',
      name:'Quick Service'
    },
    {
      icon:'https://cdn1.parksmedia.wdprapps.disney.com/media/layout/assets/icons/pep/prix-fixe-tsr.svg',
      name:'Fine/Signature Dining'
    },
    {
      icon:'https://cdn1.parksmedia.wdprapps.disney.com/media/layout/assets/icons/pep/lists.svg',
      name:'All Filter'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
