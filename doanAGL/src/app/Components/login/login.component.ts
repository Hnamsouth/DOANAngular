import { HttpClient } from '@angular/common/http';
import { Binary } from '@angular/compiler';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import axios from 'axios';
import {Observable, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, filter} from 'rxjs/operators';

type State = {id: number, name: string};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // public model: State|undefined;
  // formatter = (state: State) => state.name;
  inp=''
  states: State[] = [
    {id: 0, name: 'Alabama'},
    {id: 1, name: 'Alaska'},
    {id: 2, name: 'American Samoa'},
    {id: 3, name: 'Arizona'},
    {id: 4, name: 'Arkansas'},
    {id: 5, name: 'California'},
    {id: 6, name: 'Colorado'},
    {id: 7, name: 'Connecticut'},
    {id: 8, name: 'Delaware'},
    {id: 9, name: 'District Of Columbia'},
    {id: 10, name: 'Federated States Of Micronesia'}
  ]
  base64:string = '';
  test:any;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  val='';
  testselect(vl:any){
    // console.log(vl.value)
    this.val=vl.value
    console.log(this.states)
  }
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
          // console.log(reader.result)
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
  ctrl = new FormControl<number | null>(null, Validators.required);

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }




}
