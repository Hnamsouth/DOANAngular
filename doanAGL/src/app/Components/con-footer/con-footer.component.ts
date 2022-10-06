import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-con-footer',
  templateUrl: './con-footer.component.html',
  styleUrls: ['./con-footer.component.scss']
})
export class ConFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  email=new FormControl('');
}
