import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EduServService } from 'src/app/services/edu-serv.service';

@Component({
  selector: 'app-edit-edu',
  templateUrl: './edit-edu.component.html',
  styleUrls: ['./edit-edu.component.css']
})
export class EditEduComponent implements OnInit {

  edu : Education = null;

  constructor(private eduServ: EduServService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.eduServ.detail(id).subscribe(data => {
        this.edu = data;
      }, err => {
        alert("Error al modificar educación");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.eduServ.update(id, this.edu).subscribe(data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar educación");
        this.router.navigate(['']);
      }
    )
  }

}
