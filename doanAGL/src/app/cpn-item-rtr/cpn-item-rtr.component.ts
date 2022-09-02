import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cpn-item-rtr',
  templateUrl: './cpn-item-rtr.component.html',
  styleUrls: ['./cpn-item-rtr.component.scss']
})
export class CpnItemRTRComponent implements OnInit {
  info={
    fName:'hoang',
    lName:'nam'
  }

  constructor(private route:ActivatedRoute,private http:HttpClient){
    // get params user/:id  -> values= vl['id']
    this.route.params.subscribe(vl=>{
      console.log(vl)
    })
    this.info[`fName`];
    this.route.data.subscribe(data=>{
      console.log(data)
    })
    // ?name=hn&age=23 multi query
    this.route.queryParams.subscribe(query=>{
      console.log(query)
    })
    this.route.queryParamMap.subscribe(qmap=>{
      console.log(qmap)
    })
  }

  ngOnInit(): void {
  }

}
