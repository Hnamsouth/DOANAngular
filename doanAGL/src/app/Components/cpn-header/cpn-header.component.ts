import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpn-header',
  templateUrl: './cpn-header.component.html',
  styleUrls: ['./cpn-header.component.scss']
})
export class CpnHeaderComponent implements OnInit {

  array =[1,2,4,2,2]

  constructor() {
    const list = document.querySelectorAll('.list');
    list.forEach(item=>{
          item.addEventListener('click',()=>{
            console.log('1')
            });
          })
    // console.log(list)
    // function activeLink(){
    //     list.forEach((item) =>
    //     item.classList.remove('active'));
    //     this.activeLink.classList.add('active')
    // }
    // list.forEach((item) =>
    // item.addEventListener('click',activeLink));


  //   list.forEach(item=>{
  //     item.addEventListener('click',()=>{
  //       list.forEach(item2 =>{
  //         item2.classList.remove('active');
  //       });
  //   });
  //   item.classList.add('active');
  // })
  }

  ngOnInit(): void {

  }

}
