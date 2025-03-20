import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.css']
})
export class CounterComponentComponent {
  value:number = 0;

  increment(){
    this.value++;
  }
  decrement(){
    this.value--;
  }
  reset(){
    this.value = 0;
  }

}
