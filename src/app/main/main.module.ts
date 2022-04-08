import { NgModule } from '@angular/core';
import { NbIconLibraries, NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './main.component';

@NgModule({
  imports: [
    MainRoutingModule,
    ThemeModule,
    NbMenuModule,
  ],
  declarations: [
    MainComponent,
  ],
})
export class MainModule {
  constructor(iconsLibrary: NbIconLibraries) {
    iconsLibrary.registerSvgPack('nav-clients-1', { 'clients-1': '<img src="../../assets/side-nav/1.svg" width="24px" height="24px"  class="item-icon no-colored"> <img src="../../assets/side-nav/1-dark.svg" width="24px" height="24px"  class="item-icon colored">' });
    iconsLibrary.registerSvgPack('nav-clients-2', { 'clients-2': '<img src="../../assets/side-nav/2.svg" width="24px" height="24px"  class="item-icon no-colored"> <img src="../../assets/side-nav/2-dark.svg" width="24px" height="24px"  class="item-icon colored">' });
    iconsLibrary.registerSvgPack('nav-clients-3', { 'clients-3': '<img src="../../assets/side-nav/3.svg" width="24px" height="24px"  class="item-icon no-colored"> <img src="../../assets/side-nav/3-dark.svg" width="24px" height="24px"  class="item-icon colored">' });
    iconsLibrary.registerSvgPack('nav-clients-4', { 'clients-4': '<img src="../../assets/side-nav/4.svg" width="24px" height="24px"  class="item-icon no-colored"> <img src="../../assets/side-nav/4-dark.svg" width="24px" height="24px"  class="item-icon colored">' });
    iconsLibrary.registerSvgPack('nav-clients-5', { 'clients-5': '<img src="../../assets/side-nav/5.svg" width="24px" height="24px"  class="item-icon no-colored"> <img src="../../assets/side-nav/5-dark.svg" width="24px" height="24px"  class="item-icon colored">' });
    iconsLibrary.registerSvgPack('nav-clients-6', { 'clients-6': '<img src="../../assets/side-nav/6.svg" width="24px" height="24px"  class="item-icon no-colored"> <img src="../../assets/side-nav/6-dark.svg" width="24px" height="24px"  class="item-icon colored">' });
    iconsLibrary.registerSvgPack('nav-clients-7', { 'clients-7': '<img src="../../assets/side-nav/7.svg" width="24px" height="24px"  class="item-icon no-colored"> <img src="../../assets/side-nav/7-dark.svg" width="24px" height="24px"  class="item-icon colored">' });
    iconsLibrary.registerSvgPack('nav-clients-8', { 'clients-8': '<img src="../../assets/side-nav/8.svg" width="24px" height="24px"  class="item-icon no-colored"> <img src="../../assets/side-nav/8-dark.svg" width="24px" height="24px"  class="item-icon colored">' });
    iconsLibrary.registerSvgPack('nav-clients-9', { 'clients-9': '<img src="../../assets/side-nav/9.svg" width="24px" height="24px"  class="item-icon no-colored"> <img src="../../assets/side-nav/9-dark.svg" width="24px" height="24px"  class="item-icon colored">' });
    iconsLibrary.registerSvgPack('nav-clients-10', { 'clients-10': '<img src="../../assets/side-nav/10.svg" width="24px" height="24px"  class="item-icon no-colored"> <img src="../../assets/side-nav/10-dark.svg" width="24px" height="24px"  class="item-icon colored">' });
    iconsLibrary.registerSvgPack('nav-clients-11', { 'clients-11': '<img src="../../assets/side-nav/11.svg" width="24px" height="24px"  class="item-icon no-colored"> <img src="../../assets/side-nav/11-dark.svg" width="24px" height="24px"  class="item-icon colored">' });
    iconsLibrary.registerSvgPack('nav-clients-12', { 'clients-12': '<img src="../../assets/side-nav/12.svg" width="24px" height="24px"  class="item-icon no-colored"> <img src="../../assets/side-nav/12-dark.svg" width="24px" height="24px"  class="item-icon colored">' });

  }
}
