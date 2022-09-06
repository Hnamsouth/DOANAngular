import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private fbd:FormBuilder) { }
 loginForm =  this.fbd.group({
  userName:['', Validators.required],
  password:'1234243'
 })

  ngOnInit(): void {
  }

}
