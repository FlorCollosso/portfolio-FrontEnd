import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-info-about',
  templateUrl: './info-about.component.html',
  styleUrls: ['./info-about.component.css']
})
export class InfoAboutComponent implements OnInit {

  person: person = new person ("", "", "", "", "");

  constructor(public personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getPerson().subscribe(data => {this.person = data});
  }

}
