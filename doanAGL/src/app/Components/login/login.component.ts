import { HttpClient } from '@angular/common/http';
import { Binary } from '@angular/compiler';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  base64:string = '';
  test:any;

  constructor(private fbd:FormBuilder,private http:HttpClient) {
    // let text = this.http.get<any>('http://localhost:1234/get-img').subscribe(value=>{
    //   console.log(value)
    // })
  }
  handleFileInput(event:any) {
    // console.log(event);
    let file = event.target.files[0];
    const reader = new FileReader();
    const ar = new Uint8Array()
        reader.onloadend=()=>{
          this.test = reader.result;
          console.log(reader.result)
          // const base64String = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
        }
        if (file) {
            // let as=reader.readAsArrayBuffer(file as Blob);
            let ass=reader.readAsDataURL(file as Blob);
            // console.log(as)
        }

          // this.http.post('http://localhost:1234/post-img',{longtextimg:this.test}).subscribe(vl=>{console.log(vl)})
}

 loginForm =  this.fbd.group({
  userName:['', Validators.required],
  password:'1234243'
 })

  ngOnInit(): void {
  }

}
