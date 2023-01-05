import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Skills } from 'src/app/models/skills';
import { SkillServService } from 'src/app/services/skill-serv.service';
import { TokenService } from 'src/app/services/token.service';
import SwiperCore, { Navigation, Swiper } from "swiper";

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-percentages-skills',
  templateUrl: './percentages-skills.component.html',
  styleUrls: ['./percentages-skills.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PercentagesSkillsComponent implements OnInit {

  skill: Skills[] = [];

  constructor(private skillServ: SkillServService, private tokenService: TokenService) { }

  isLoggedIn = false;
  scoreColor = "";

 async ngOnInit(): Promise<any> { 
    this.cargarSkill();

    if(this.tokenService.getToken()) {
        this.isLoggedIn = true;
    } else {
        this.isLoggedIn = false;
    };
}

  cargarSkill(): void {
    this.skillServ.lista().subscribe(data => {this.skill = data})
  }

  async delete(id?: number): Promise<any> {
    if(id != undefined) {
      this.skillServ.delete(id).subscribe(data => {
        this.cargarSkill();
      }, err => {
        alert("No se pudo borrar")
      })
    }
  }

  getColor(percent: number) {
    if (percent < 50) {
      return '#f19b91';
    } else if (percent < 75) {
      return '#e0e98c';
    } else {
      return 'var(--celeste)';
    }
  }

  setRadius(): number {
    if(window.innerWidth <= 480) {
      return 35;
    } else if (window.innerHeight <=770) {
      return 45;
    } else if(window.innerWidth <= 1024) {
      return 60;
    } else if (window.innerWidth <= 1280) {
      return 75;
    } else {
      return 80;
    }
  }

  setStrokeWidth(): number {
    if(window.innerWidth <= 480) {
      return 8;
    } else if (window.innerWidth <= 770) {
      return 12;
    } else if(window.innerWidth <= 1024) {
      return 14;
    } else if (window.innerWidth <= 1280) {
      return 18;
    } else {
      return 20;
    }
  }

  setFontSize(): string {
    if(window.innerWidth <= 480) {
      return "1.8vw";
    } else if (window.innerWidth <= 770) {
      return "1.8vw";
    } else if(window.innerWidth <= 1024) {
      return "1.5vw";
    } else if (window.innerWidth <= 1280) {
      return "1.3vw";
    } else {
      return "1vw";
    }
  }
  
}
