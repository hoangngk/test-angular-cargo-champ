import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS_EN } from './main-menu-en';
import { MENU_ITEMS_DE } from './main-menu-de';
import { TranslateService } from '@ngx-translate/core';
import { MaterialService } from '../core/services/material.service';
import { AuthService } from '../core/services';

@Component({
  selector: 'ngx-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  menu;

  constructor(private translate: TranslateService, private as: AuthService) {
    this.as.langChange.subscribe(data => {
      if (data === 'en') {
        this.menu = MENU_ITEMS_EN;
      }
      if (data === 'de') {
        this.menu = MENU_ITEMS_DE;
      }

    });
  }

  ngOnInit(): void {
  }
}
