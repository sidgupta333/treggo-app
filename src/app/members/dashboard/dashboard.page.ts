import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { LoadingController, IonSlides } from '@ionic/angular';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { trigger, transition, style, animate } from '@angular/animations';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  animations: [
    trigger(
      'Animation1',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('0.2s linear',
              style({ opacity: 1, }))
          ]
        )
      ]
    )
  ]
})
export class DashboardPage implements OnInit {

  slidesConfig = {
    initialSlide: 0,
    autoplay: true,
    speed: 400,
    centeredSlides: true,
    pager: true,
  };

  bannersUrls: any = [];
  banners: any = [];
  dishes: any = [];
  accordionExpanded: boolean[] = [];

  constructor(private rest: RestService,
    private loading: LoadingController,
    private dialogs: Dialogs,
    private storage: Storage,
    private router: Router
  ) { }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  ngOnInit() {


    //Delete any existing order data:
    this.storage.ready().then(() => {
      this.storage.remove('dishes');
    });

    // Get All the banners from the server
    this.loading.create({
      message: 'Fetching Dishes',
      spinner: 'dots',
      showBackdrop: true,
    }).then(loading => {

      loading.present();

      //Get all the available dishes:
      this.rest.getAllDishes().subscribe((res: any) => {

        loading.dismiss();
        console.log(res);
        this.dishes = res;
        res.forEach(e => {
          this.accordionExpanded.push(false);
        });

        //Create image URL based on dish ID:
        this.dishes.forEach(category => {

          category.dishes.forEach(dish => {
            dish.imgUrl = this.rest.createDishUrl(dish.dish_id);
            dish.count = 0;
          });
        });
      });

      this.rest.getAllBanners().subscribe((res: any) => {


        this.banners = res;
        this.banners.forEach(element => {
          if (element.is_available == "Y") {
            this.bannersUrls.push(this.rest.createBannerUrl(element.banner_id));
          }
        });
      })
    });
  }


  //Create order object with all dishes:

  completeOrder() {
    this.storage.set('dishes', this.dishes);

    console.log("Dishes -> ", this.dishes);
    this.router.navigate(['confirm-order']);
  }


  toggleAccordion(i) {
    this.accordionExpanded[i] = !this.accordionExpanded[i];
  }


  addCount(dish) {
    dish.count++;
  }

  minusCount(dish) {
    dish.count--;
  }

}
