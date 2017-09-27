import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-nested',
  templateUrl: './my-nested.component.html',
  styleUrls: ['./my-nested.component.css']
})
export class MyNestedComponent implements OnInit {
  myInputValue='fill this out please';

ShootAnAlert(value){
  alert(value)
}

  constructor() { }

  ngOnInit() {
  }

}
