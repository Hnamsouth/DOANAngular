import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {Observable, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, filter} from 'rxjs/operators';
type State = {id: number, name: string};

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class PracticesComponent implements OnInit {
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
  constructor() { }

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
