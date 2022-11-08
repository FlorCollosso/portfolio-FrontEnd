import { Component, OnInit, ViewEncapsulation} from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }
  

}
