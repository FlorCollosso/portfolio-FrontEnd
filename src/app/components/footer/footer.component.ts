import { Component, OnInit } from '@angular/core';
import { person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  person: person = new person ("", "", "", "", "", "");
  per: person[] = [];

  constructor(public personServ: PersonService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.personServ.getPerson().subscribe(data => {this.person = data});
    this.cargarPer();
  }

  cargarPer(): void {
    this.personServ.lista().subscribe(data => {this.per = data})
  }

}
