import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-cpn-checkverify',
  template: `<div style="padding: 10px;background:url('https://cdn1.parksmedia.wdprapps.disney.com/media/layout/assets/themes/wdw-50th/textures/nav-textures/nav_texture_1920.png'),#FFFBF5;"><div class="container text-center" [style]="main">
  <div><i [ngClass]="icon" style="font-size: 102px;" [style.color]="color"></i>
      <h1>Thanks for Subscribe</h1>
      <p class="fs-5" >{{text}}</p>
      <p class="fs-6" style="color: #919191;">©2022 Keansburg Amusement Park - Keansburg, New Jersey, USA</p>
  </div>
</div></div>`,
})
export class CheckverifyComponent implements OnInit {
// far fa-thumbs-up #2973e1 -- far fa-check-circle color: #1f9323;
main=`height: 67vh;display: flex;align-items: center;justify-content: center;    padding: 10pxpx;background: white;box-shadow:rgb(159 159 159) -5px 5px 8px;`
  constructor(private http:HttpClient,private route:ActivatedRoute,private router: Router) {
    var checkrgt=setInterval(()=>{
      let data:any = this.route.snapshot.params
      this.http.post<any>(`https://app-t2204m-eprojet.herokuapp.com/checkverify`,{emailorphone:data.user}).subscribe(vl=>{
        console.log(vl.data)
        if(vl.data==1){
          clearInterval(checkrgt);
          this.color='#1f9323'
          this.icon='far fa-check-circle'
          this.text='Wish you have a happy and enjoyable journey with your family and loved ones';
          localStorage.setItem('user',JSON.stringify({id:1,user:data.user}))
          setTimeout(() => {
            this.router.navigate(['/'])
          },5000);
        }else{
        }
      })
    },15000);

  }
  icon='far fa-thumbs-up';
  color='#2973e1'
  text=''
  ngOnInit(): void {
    let data:any = this.route.snapshot.params
      this.text=`Please verify your account at ${data.user}`
  }

}
