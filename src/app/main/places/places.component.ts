import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-material',
  template: `
    <router-outlet></router-outlet>
  `,
})

export class PlacesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
