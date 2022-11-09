import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-percentages-skills',
  templateUrl: './percentages-skills.component.html',
  styleUrls: ['./percentages-skills.component.css']
})
export class PercentagesSkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth >= 768) {

      const ratings = Array.from(document.getElementsByClassName('rating'));

      ratings.forEach((rating) => { 
        const ratingContent = rating.innerHTML;
        const ratingScore = parseInt(ratingContent, 10);

         // Define if the score is good, meh or bad according to its value
         
        const scoreClass = ratingScore < 40 ? "bad" : ratingScore < 60 ? "meh" : "good";

        // Add score class to the rating

        rating.classList.add(scoreClass);

        const ratingColor = window.getComputedStyle(rating).backgroundColor;
        const gradient = `background: conic-gradient(${ratingColor} ${ratingScore}%, transparent 0 100%)`;

        rating.setAttribute("style", gradient);
      });
    } 
  }
}
