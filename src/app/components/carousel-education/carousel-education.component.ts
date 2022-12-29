import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Navigation } from "swiper";
import { EduServService } from 'src/app/services/edu-serv.service';
import { TokenService } from 'src/app/services/token.service';
import { Education } from 'src/app/models/education';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-carousel-education',
  templateUrl: './carousel-education.component.html',
  styleUrls: ['./carousel-education.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselEducationComponent implements OnInit {

  edu: Education[] = [];

  constructor(private eduServ: EduServService, private tokenService: TokenService) { }

  isLoggedIn = false;

  ngOnInit(): void {

    this.cargarEdu();

    if(this.tokenService.getToken()) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  cargarEdu(): void {
    this.eduServ.lista().subscribe(data => {this.edu = data})
  }

  delete(id?: number) {
    if(id != undefined) {
      this.eduServ.delete(id).subscribe(data => {
        this.cargarEdu();
      }, err => {
        alert("No se pudo borrar")
      })
    }
  }

}
