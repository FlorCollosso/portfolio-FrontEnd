import { Component, OnInit } from '@angular/core';
import { EduServService } from 'src/app/services/edu-serv.service';
import { Education } from 'src/app/models/education';
import { Projects } from 'src/app/models/projects';
import { ProServService } from 'src/app/services/pro-serv.service';
import { ExpServService } from 'src/app/services/exp-serv.service';
import { Works } from 'src/app/models/works';
import { PersonService } from 'src/app/services/person.service';
import { person } from 'src/app/models/person.model';
import { SkillServService } from 'src/app/services/skill-serv.service';
import { Skills } from 'src/app/models/skills';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-generate-pdf',
  templateUrl: './generate-pdf.component.html',
  styleUrls: ['./generate-pdf.component.css']
})
export class GeneratePdfComponent implements OnInit {

  edu: Education[] = [];
  pro: Projects[] = [];
  works: Works[] = [];
  per: person[] = [];
  skill: Skills[] = [];
  person: person = new person ("", "", "", "", "");

  constructor(private skillServ: SkillServService, private eduServ: EduServService, public personServ: PersonService, private proServ: ProServService, private expServ: ExpServService) { }

  ngOnInit(): void {
    this.cargarEdu();
    this.cargarPro();
    this.cargarPer();
    this.cargarExp();
    this.cargarSkill();
  }

 
  cargarEdu(): void {
    this.eduServ.lista().subscribe(data => {this.edu = data})
  }

  cargarPro(): void {
    this.proServ.lista().subscribe(data => {this.pro = data})
  }

  cargarPer(): void {
    this.personServ.getPerson().subscribe(data => {this.person = data})
    this.personServ.lista().subscribe(data => {this.per = data})
  }

  cargarExp(): void {
    this.expServ.lista().subscribe(data => {this.works = data})
  }

  cargarSkill(): void {
    this.skillServ.lista().subscribe(data => {this.skill = data})
  }

  static downloadPDF() {
    const DATA = document.getElementById('contentPDF');;
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 1,
      logging: true,
      useCORS: true
    };

    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_portfolio.pdf`);
    });
  }
}
