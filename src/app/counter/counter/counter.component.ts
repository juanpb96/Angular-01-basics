import { Component } from '@angular/core';


@Component({
    selector: 'app-counter',
    template: `
        <h1>Hello world! {{ title }}</h1>
        <h3>The base is <strong> {{ base }} </strong></h3>

        <!-- Methods like 'click' must be encapsulated with () -->
        <button (click)="accumulate(base)"> + {{ base }} </button>

        <span>{{ num }}</span>

        <button (click)="accumulate(-base)"> - {{ base }} </button>
    `
})
export class CounterComponent {
    title: string = 'bases';
    num  : number = 10;
    base : number = 5;
  
    accumulate( value: number ) {
      this.num += value;
    }
}