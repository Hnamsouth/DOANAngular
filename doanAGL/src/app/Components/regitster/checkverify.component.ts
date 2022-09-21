import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-cpn-checkverify',
  template: `<div class="container text-center">
  <div><i class="far fa-check-circle" style="font-size: 102px;color: #1f9323;"></i>
      <h2>Thanks for Subscribe</h2>
      <p class="fs-5">Wish you have a happy and enjoyable journey with your family and loved ones</p>
      <p>©2022 Keansburg Amusement Park - Keansburg, New Jersey, USA</p>
  </div>
</div>`,
})
export class CheckverifyComponent implements OnInit {
// fas fa-exclamation
  constructor(private http:HttpClient,private route:ActivatedRoute,private router: Router) {
    var checkrgt=setInterval(()=>{
      let data:any = this.route.snapshot.params

      this.http.post<any>(`http://localhost:1234/checkverify`,{emailorphone:data.user}).subscribe(vl=>{
        console.log(vl.data)
        if(vl.data==1){
          clearInterval(checkrgt);
          this.router.navigate(['/login'])
        }else{

        }
      })

    },15000);

  }

  ngOnInit(): void {
  }

}
