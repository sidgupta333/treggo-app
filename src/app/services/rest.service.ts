import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestService {


  SERVER: string = "https://treggo-api.herokuapp.com";
  
  // SERVER: string = "http://localhost:8080";

  GET_ALL_BANNERS: string = "/banners/getAll";
  GET_ALL_DISHES: string = "/dishes/dishes/categoriesAll";
  NEW_CUSTOMER: string = "/customers/create";
  ACTIVATE_CUSTOMER: string = "/customers/updateStatus";
  CREATE_ORDER: string = "/orders/create";
  CREATE_SUB_ORDER: string = "/subOrders/create";
  UPDATE_SUBORDER_STATUS = "/subOrders/updateStatus";
  UPDATE_ORDER_STATUS = "/orders/updateStatus";
  GET_SUBORDER_BY_ID = "/subOrders/getOne/";
  GET_ORDER_BY_ID = "/orders/getOne/";
  APPLY_COUPON = "/coupons/apply";


  constructor(private http: HttpClient) { }



  // -----------------ALL HTTP Services defined here------------------------------

  public createBannerUrl(bannerID: any) {
    return this.SERVER.concat("/images/download/banner/", bannerID);
  }

  public createDishUrl(dishID: any) {
    return this.SERVER.concat("/images/download/dish/", dishID);
  }

  public getAllBanners() {
    let url = this.SERVER.concat(this.GET_ALL_BANNERS);
    return this.http.get(url);
  };

  public getAllDishes() {
    let url = this.SERVER.concat(this.GET_ALL_DISHES);
    return this.http.get(url);
  }

  public createNewCustomer(dto: any) {
    let url = this.SERVER.concat(this.NEW_CUSTOMER);
    return this.http.post(url, dto);
  }

  public updateCustomerStatus(dto: any) {
    let url = this.SERVER.concat(this.ACTIVATE_CUSTOMER);
    return this.http.post(url, dto);
  }

  public createOrder(dto: any) {
    let url = this.SERVER.concat(this.CREATE_ORDER);
    return this.http.post(url, dto);
  }

  public createSubOrder(dto: any) {
    let url = this.SERVER.concat(this.CREATE_SUB_ORDER);
    return this.http.post(url, dto);
  }

  public updateSubOrder(dto: any) {
    let url = this.SERVER.concat(this.UPDATE_SUBORDER_STATUS);
    return this.http.post(url, dto);
  }

  public updateOrder(dto: any) {
    let url = this.SERVER.concat(this.UPDATE_ORDER_STATUS);
    return this.http.post(url, dto);
  }

  public getSubOrder(id: any) {
    let url = this.SERVER.concat(this.GET_SUBORDER_BY_ID, id);
    return this.http.get(url);
  }

  public getOrder(id: any) {
    let url = this.SERVER.concat(this.GET_ORDER_BY_ID, id);
    return this.http.get(url);
  }

  public applyCoupon(dto: any) {
    let url = this.SERVER.concat(this.APPLY_COUPON);
    return this.http.post(url, dto);
  }



  public formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

}
