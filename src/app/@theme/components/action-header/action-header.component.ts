import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../../../core/services';

export const filterOptionsEN = [
  {
    "title": "Custom",
    "value": "custom"
  },
  {
    "title": "Show All",
    "value": "all"
  }
];

export const filterOptionsDE = [
  {
    "title": "Anpassen",
    "value": "custom"
  },
  {
    "title": "Alles zeigen",
    "value": "all"
  }
];
@Component({
  selector: 'ngx-action-header',
  templateUrl: './action-header.component.html',
  styleUrls: ['./action-header.component.scss']
})
export class ActionHeaderComponent implements OnInit {
  @Output() createButton = new EventEmitter();
  @Output() FilterButton = new EventEmitter();
  selection = 'Show All';

  filterOption = [];
  constructor(
    private as: AuthService
  ) {
    this.as.langChange.subscribe(currLang => {
      if (currLang) {
        this.selection = currLang === 'en' ? 'Show All' : 'Alles zeigen';
        this.filterOption = currLang === 'en' ? filterOptionsEN : filterOptionsDE;
      }
    });
  }

  ngOnInit(): void {
  }

  create() {
    this.createButton.emit('');
  }

  showFilter(ev: string) {
    this.FilterButton.emit(ev);
  }



}
