import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  navigateToDashboard() {
    this.router.navigate(['menu', 'dashboard']);
  }

  navigateToStatus() {
    this.router.navigate(['menu', 'status']);
  }

  navigateToMyOrders() {
    this.router.navigate(['menu', 'my-orders']);
  }

}
