import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

@Component({
  selector: 'app-carousel-projects',
  templateUrl: './carousel-projects.component.html',
  styleUrls: ['./carousel-projects.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselProjectsComponent implements OnInit {

  // @ViewChild('swiperSlideProjects') swiperSlideProjects?: Swiper;

  constructor() { }

  ngOnInit(): void {

    // this.swiperSlideProjects = new Swiper ('.swiperProjects', {
    //   slidesPerView: 5,
    //   breakpoints: {
    //     1200: {
    //       slidesPerView: 4,
    //     }
    //   }
    // })

  }
  

}
