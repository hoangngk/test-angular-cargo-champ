import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-counter-party',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class CounterPartyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
