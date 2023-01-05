import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Works } from 'src/app/models/works';
import { ExpServService } from 'src/app/services/exp-serv.service';

@Component({
  selector: 'app-new-work',
  templateUrl: './new-work.component.html',
  styleUrls: ['./new-work.component.css']
})
export class NewWorkComponent implements OnInit {

  nombreE: string = '';
  puesto : string = '';
  fechaExp : string = '';
  descExp : string = '';
  imgExp : string = '';

  constructor(private expServ: ExpServService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const work = new Works(this.nombreE, this.puesto, this.fechaExp, this.descExp, this.imgExp);
    this.expServ.save(work).subscribe(data => {
      alert("Experiencia añadida");
      this.router.navigate([''])
    }), (err: any) => {
      alert("Error");
      this.router.navigate(['']);
    }
  }

}
