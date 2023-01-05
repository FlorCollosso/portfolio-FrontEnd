import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Projects } from 'src/app/models/projects';
import { ProServService } from 'src/app/services/pro-serv.service';
import { TokenService } from 'src/app/services/token.service';
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

  pro: Projects[] = [];

  constructor(private proServ: ProServService, private tokenService: TokenService) { }

  isLoggedIn = false;

  ngOnInit(): void {

    this.cargarPro();

    if(this.tokenService.getToken()) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  cargarPro(): void {
    this.proServ.lista().subscribe(data => {this.pro = data})
  }

  delete(id?: number) {
    if(id != undefined) {
      this.proServ.delete(id).subscribe(data => {
        this.cargarPro();
      }, err => {
        alert("No se pudo borrar")
      })
    }
  }

}
