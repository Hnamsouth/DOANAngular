import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hollowgraves-haunted',
  templateUrl: './hollowgraves-haunted.component.html',
  styleUrls: ['./hollowgraves-haunted.component.scss']
})
export class HollowgravesHauntedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// need help
interface Scripts {
  name: string;
  src: string;
}  
export const ScriptStore: Scripts[] = [
  {name: 'aos', src: 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js'}
];

// need help