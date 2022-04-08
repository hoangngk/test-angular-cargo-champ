import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module')
          .then(m => m.DashboardModule),
      },
      {
        path: 'materials',
        loadChildren: () => import('./material/material.module')
          .then(m => m.MaterialModule),
      },
      {
        path: 'counter-party',
        loadChildren: () => import('./counter-party/counter-party.module')
          .then(m => m.CounterPartysModule),
      },
      {
        path: 'tours',
        loadChildren: () => import('./tours/tours.module')
          .then(m => m.ToursModule),
      },
      {
        path: 'orders',
        loadChildren: () => import('./orders/orders.module')
          .then(m => m.OrdersModule),
      },
      {
        path: 'offers',
        loadChildren: () => import('./offers/offers.module')
          .then(m => m.OffersModule),
      },
      {
        path: 'drivers',
        loadChildren: () => import('./drivers/drivers.module')
          .then(m => m.DriversModule),
      },
      {
        path: 'prices',
        loadChildren: () => import('./price/price.module')
          .then(m => m.PriceModule),
      },
      {
        path: 'locations',
        loadChildren: () => import('./places/places.module')
          .then(m => m.PlacesModule),
      },
      {
        path: 'vehicles',
        loadChildren: () => import('./vehicles/vehicles.module')
          .then(m => m.VehiclesModule),
      },
      {
        path: 'trailers',
        loadChildren: () => import('./trailers/trailers.module')
          .then(m => m.TrailersModule),
      },
      // {
      //   path: 'locations',
      //   loadChildren: () => import('./places/places.module')
      //     .then(m => m.PlacesModule),
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
