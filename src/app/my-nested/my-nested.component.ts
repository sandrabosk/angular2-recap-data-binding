import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-nested',
  templateUrl: './my-nested.component.html',
  styleUrls: ['./my-nested.component.css']
})
export class MyNestedComponent implements OnInit {
  @Input() ninja;

  myInputValue='fill this out please';

ShootAnAlert(value){
  alert(value)
}

player={
  name:'Sandra',
  discipline:'random'
}

  constructor() { }

  ngOnInit() {
  }

}
