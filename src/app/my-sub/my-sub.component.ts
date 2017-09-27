import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-sub',
  templateUrl: './my-sub.component.html',
  styleUrls: ['./my-sub.component.css']
})
export class MySubComponent implements OnInit {
@Input() player;
  student={
    name:'Marisa',
    department:'Web Dev'
  }

  onKey(event){
    console.log(`Key pressed: ${ event.key }`)
  }

  constructor() { }

  ngOnInit() {
  }

}
