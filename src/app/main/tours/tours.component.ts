import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-tours',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class ToursComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
