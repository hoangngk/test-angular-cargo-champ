/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import { TranslateService } from '@ngx-translate/core';
import { MaterialService } from './core/services/material.service';
import { AuthService } from './core/services';

@Component({
  selector: 'ngx-app',
  template: `
  <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {

  constructor(private as: AuthService, private translate: TranslateService, private analytics: AnalyticsService, private seoService: SeoService) {
    translate.addLangs(['en', 'de']);
    if (localStorage.getItem('lang') && (localStorage.getItem('lang') !== null || localStorage.getItem('lang') !== '')
    ) {
      translate.setDefaultLang(localStorage.getItem('lang'));
      this.as.langChange.next(localStorage.getItem('lang'));

    } else {
      translate.setDefaultLang('en');
      this.as.langChange.next('en');
    }
    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
}
