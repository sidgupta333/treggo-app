import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  
  { path: 'menu', loadChildren: () => import('./members/menu/menu.module').then(m => m.MenuPageModule) },

  { path: 'confirm-order', loadChildren: () => import('./members/confirm-order/confirm-order.module').then(m => m.ConfirmOrderPageModule) },
  { path: 'my-orders', loadChildren: './members/my-orders/my-orders.module#MyOrdersPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
