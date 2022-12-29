import { style } from '@angular/animations';
import { Directive,Component, ElementRef, OnInit, ViewChild, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { Works } from 'src/app/models/works';
import { ExpServService } from 'src/app/services/exp-serv.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-gallery-works',
  templateUrl: './gallery-works.component.html',
  styleUrls: ['./gallery-works.component.css']
})
export class GalleryWorksComponent implements OnInit {

  works: Works[] = [];

  @ViewChild('asImage') image?: ElementRef;

  constructor(private Renderer2: Renderer2, private expServ: ExpServService, private tokenService: TokenService) {}

  isLoggedIn = false;

  ngOnInit(): void {

    this.cargarExp();

    if(this.tokenService.getToken()) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  cargarExp(): void {
    this.expServ.lista().subscribe(data => {this.works = data})
  }

  delete(id?: number) {
    if(id != undefined) {
      this.expServ.delete(id).subscribe(data => {
        this.cargarExp();
      }, err => {
        alert("No se pudo borrar")
      })
    }
  }

}
