import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}



// **************************************************************************************************************
// Material cell

@Component({
  selector: 'ngx-material',
  template: `<div>
  <a [routerLink]="[pathRefAdded() + 'main/materials/view/',rowData?.materialId]" class="no-anch">
      {{value ? value : '-' }}
  </a>
</div>`,
  styleUrls: ['./cell.component.scss']
})
export class MaterialComponent implements OnInit {

  renderValue: any;
  @Input() value: any;
  @Input() rowData: any;
  keys = [];

  constructor() {
  }

  ngOnInit() {
    this.renderValue = this.value;
  }

  clicked(name) {
    console.log(name);
  }

  pathRefAdded(): any {
    let str = '';
    for (let index = 0; index < window.location.pathname.split('/').length - 1; index++) {
      str += '../'
    }
    return str;
  }
}

// End Material cell
// **************************************************************************************************************



// **************************************************************************************************************
// Order cell

@Component({
  selector: 'ngx-order',
  template: `<div>
  <a [routerLink]="[pathRefAdded() + 'main/orders/view/',value?.id]" class="no-anch">
      {{value?.name ? value?.name : '-' }}
  </a>
</div>`,
  styleUrls: ['./cell.component.scss']
})
export class OrderComponent implements OnInit {

  renderValue: any;
  @Input() value: {
    id: string,
    name: string
  };
  @Input() rowData: any;
  keys = [];

  constructor() { }

  ngOnInit() {
    this.renderValue = this.value;
  }

  clicked(name) {
    console.log(name);
  }

  pathRefAdded(): any {
    let str = '';
    for (let index = 0; index < window.location.pathname.split('/').length - 1; index++) {
      str += '../'
    }
    return str;
  }
}

// End Order cell
// **************************************************************************************************************



// **************************************************************************************************************
// CounterParty cell


@Component({
  selector: 'ngx-counter-party-price',
  template: `<div>
  <a [routerLink]="[pathRefAdded() + 'main/counter-party/view/',rowData?.counterPartyId]" class="no-anch">
      {{value ? value : '-' }}
  </a>
</div>`,
  styleUrls: ['./cell.component.scss']
})
export class CounterPartyPriceComponent implements OnInit {
  renderValue: any;
  @Input() value: any;
  @Input() rowData: any;
  keys = [];

  constructor() { }

  ngOnInit() {
    this.renderValue = this.value;
  }

  clicked(name) {
    console.log(name);
  }

  pathRefAdded(): any {
    let str = '';
    for (let index = 0; index < window.location.pathname.split('/').length - 1; index++) {
      str += '../'
    }
    return str;
  }
}


@Component({
  selector: 'ngx-counter-party',
  template: `<div> 
  <a [routerLink]="[pathRefAdded() + 'main/counter-party/view/',rowData?.id]" class="no-anch">
      {{rowData?.name ? rowData?.name : '-' }}
  </a>
</div>`,
  styleUrls: ['./cell.component.scss']
})
export class CounterPartyComponent implements OnInit {

  renderValue: any;
  @Input() value: {
    id: string,
    name: string
  };
  @Input() rowData: any;
  keys = [];

  constructor() { }

  ngOnInit() {
    this.renderValue = this.value;
  }

  clicked(name) {
    console.log(name);
  }

  pathRefAdded(): any {
    let str = '';
    for (let index = 0; index < window.location.pathname.split('/').length - 1; index++) {
      str += '../'
    }
    return str;
  }
}

// End CounterParty cell
// **************************************************************************************************************



// **************************************************************************************************************
// CounterParty cell

@Component({
  selector: 'ngx-location',
  template: `<div>
  <a [routerLink]="[pathRefAdded() + 'main/locations/view/',value?.id]" class="no-anch">
      {{value?.name ? value?.name : '-' }}
  </a>
</div>`,
  styleUrls: ['./cell.component.scss']
})
export class LocationComponent implements OnInit {

  renderValue: any;
  @Input() value: {
    id: string,
    name: string
  };
  @Input() rowData: any;
  keys = [];

  constructor() { }

  ngOnInit() {
    this.renderValue = this.value;
  }

  clicked(name) {
    console.log(name);
  }

  pathRefAdded(): any {
    let str = '';
    for (let index = 0; index < window.location.pathname.split('/').length - 1; index++) {
      str += '../'
    }
    return str;
  }

}

@Component({
  selector: 'ngx-location-common',
  template: `<div>
  <a [routerLink]="[pathRefAdded() + 'main/locations/view/',rowData?.locationId]" class="no-anch">
      {{value ? value : '-' }}
  </a>
</div>`,
  styleUrls: ['./cell.component.scss']
})
export class LocationCommonComponent implements OnInit {

  renderValue: any;
  @Input() value: any;
  @Input() rowData: any;
  keys = [];

  constructor() { }

  ngOnInit() {
    this.renderValue = this.value;
  }

  clicked(name) {
    console.log(name);
  }

  pathRefAdded(): any {
    let str = '';
    for (let index = 0; index < window.location.pathname.split('/').length - 1; index++) {
      str += '../'
    }
    return str;
  }

}

@Component({
  selector: 'ngx-location-loading',
  template: `<div>
  <a [routerLink]="[pathRefAdded() + 'main/locations/view/',rowData?.loadingId]" class="no-anch">
      {{value ? value : '-' }}
  </a>
</div>`,
  styleUrls: ['./cell.component.scss']
})
export class LocationLoadingComponent implements OnInit {

  renderValue: any;
  @Input() value: any;
  @Input() rowData: any;
  keys = [];

  constructor() { }

  ngOnInit() {
    this.renderValue = this.value;
  }

  clicked(name) {
    console.log(name);
  }

  pathRefAdded(): any {
    let str = '';
    for (let index = 0; index < window.location.pathname.split('/').length - 1; index++) {
      str += '../'
    }
    return str;
  }

}

@Component({
  selector: 'ngx-location-unloading',
  template: `<div>
  <a [routerLink]="[pathRefAdded() + 'main/locations/view/',rowData?.unloadingId]" class="no-anch">
      {{value ? value : '-' }}
  </a>
</div>`,
  styleUrls: ['./cell.component.scss']
})
export class LocationUnLoadingComponent implements OnInit {

  renderValue: any;
  @Input() value: any;
  @Input() rowData: any;
  keys = [];

  constructor() { }

  ngOnInit() {
    this.renderValue = this.value;
  }

  clicked(name) {
    console.log(name);
  }

  pathRefAdded(): any {
    let str = '';
    for (let index = 0; index < window.location.pathname.split('/').length - 1; index++) {
      str += '../'
    }
    return str;
  }

}
// End CounterParty cell
// **************************************************************************************************************



// **************************************************************************************************************
// CounterParty cell

@Component({
  selector: 'ngx-contact',
  template: `<div>
  <a href="javascript:void(0)" class="no-anch">
      {{value ? value : '-' }}
  </a>
</div>`,
  styleUrls: ['./cell.component.scss']
})
// [routerLink]="[pathRefAdded() + 'main/contacts/view/',rowData?.contactsID]"
export class ContactComponent implements OnInit {

  renderValue: any;
  @Input() value: any[];
  @Input() rowData: any;
  keys = [];

  constructor() { }

  ngOnInit() {
    if (this.value && this.value.length > 0) {
      this.renderValue = this.value[0];
    }
  }

  clicked(name) {
    console.log(name);
  }

  pathRefAdded(): any {
    let str = '';
    for (let index = 0; index < window.location.pathname.split('/').length - 1; index++) {
      str += '../'
    }
    return str;
  }

}

// End CounterParty cell
// **************************************************************************************************************




// **************************************************************************************************************
// ClassName change component cell

@Component({
  selector: 'ngx-order',
  template: `<div>
  <span class="span-clc {{ renderValue | lowercase}}">
      {{renderValue ? renderValue : '-' }}
  </span>
</div>`,
  styleUrls: ['./cell.component.scss']
})
export class ClassNameComponent implements OnInit {

  renderValue: any;
  className: '';
  @Input() value: {
    id: string,
    name: string
  };
  @Input() rowData: any;
  keys = [];

  constructor() { }

  ngOnInit() {
    this.renderValue = this.value;
    this.className = this.renderValue.toLowerCase();
  }
}

// End Order cell
// **************************************************************************************************************
