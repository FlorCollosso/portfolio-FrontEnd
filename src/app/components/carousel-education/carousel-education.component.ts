import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-carousel-education',
  templateUrl: './carousel-education.component.html',
  styleUrls: ['./carousel-education.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselEducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
