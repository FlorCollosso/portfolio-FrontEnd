import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from 'src/app/models/projects';
import { ProServService } from 'src/app/services/pro-serv.service';

@Component({
  selector: 'app-new-pro',
  templateUrl: './new-pro.component.html',
  styleUrls: ['./new-pro.component.css']
})
export class NewProComponent implements OnInit {

  tituloPro : string = '';
  fechaPro : string = '';
  descPro : string = '';
  urlPro : string = '';
  imgPro : string = '';

  constructor(private proServ: ProServService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const pro = new Projects(this.tituloPro, this.fechaPro, this.descPro, this.urlPro, this.imgPro);
    this.proServ.save(pro).subscribe(data => {
      alert("Proyecto añadido");
      this.router.navigate([''])
    }), (err: any) => {
      alert("Error");
      this.router.navigate(['']);
    }
  }

}
