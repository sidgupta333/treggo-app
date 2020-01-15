import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';


const routes: Routes = [
  { path: 'menu', loadChildren: () => import('./menu/menu.module').then((m) => m.MenuPageModule) }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MembersModule { }


