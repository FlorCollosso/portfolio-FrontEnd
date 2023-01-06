import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';
import { TokenService } from 'src/app/services/token.service';
import { GeneratePdfComponent } from '../generate-pdf/generate-pdf.component';

@Component({
  selector: 'app-info-about',
  templateUrl: './info-about.component.html',
  styleUrls: ['./info-about.component.css'],
})
export class InfoAboutComponent implements OnInit {

  person: person = new person ("", "", "", "", "", "");
  per: person[] = [];

  constructor(public personServ: PersonService, private tokenService: TokenService) { }

  isLoggedIn = false;

  ngOnInit(): void {
    this.personServ.getPerson().subscribe(data => {this.person = data});

    this.cargarPer();

    if(this.tokenService.getToken()) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  cargarPer(): void {
    this.personServ.lista().subscribe(data => {this.per = data})
  }

  downloadPdf() {
    try {
      GeneratePdfComponent.downloadPDF();
    } catch (err) { 
      console.log(err);
    }
  }

}
