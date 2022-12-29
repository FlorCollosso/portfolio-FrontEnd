import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EduServService } from 'src/app/services/edu-serv.service';

@Component({
  selector: 'app-new-edu',
  templateUrl: './new-edu.component.html',
  styleUrls: ['./new-edu.component.css']
})
export class NewEduComponent implements OnInit {

  tituloEdu: string = '';
  fechaEdu : string = '';
  imgEdu : string = '';

  constructor(private eduServ: EduServService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const edu = new Education(this.tituloEdu, this.fechaEdu, this.imgEdu);
    this.eduServ.save(edu).subscribe(data => {
      alert("educación añadida");
      this.router.navigate([''])
    }), (err: any) => {
      console.log("alert")
      alert("Error");
      this.router.navigate(['']);
    }
  }

}
