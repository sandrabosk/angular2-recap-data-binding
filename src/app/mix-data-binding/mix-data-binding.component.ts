import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mix-data-binding',
  templateUrl: './mix-data-binding.component.html',
  styleUrls: ['./mix-data-binding.component.css']
})
export class MixDataBindingComponent implements OnInit {
  isInputDisabled: boolean = false;

  toggleInput(){
    this.isInputDisabled = !this.isInputDisabled;
  }

  onKey(value){
    console.log(`Input value is: ${ value }`)
  }

  constructor() { }

  ngOnInit() {
  }

}
