import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/models/skills';
import { SkillServService } from 'src/app/services/skill-serv.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  nombreSkill : string = '';
  porcenSkill : number = null;

  constructor(private skillServ: SkillServService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Skills(this.nombreSkill, this.porcenSkill);
    this.skillServ.save(skill).subscribe(data => {
      alert("Skill añadida");
      this.router.navigate([''])
    }), (err: any) => {
      alert("Error");
      this.router.navigate(['']);
    }
  }

}
