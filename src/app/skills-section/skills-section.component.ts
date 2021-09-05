import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss'],
})



export class SkillsSectionComponent implements OnInit {
  skills = [
    {
      name: 'JavaScript',
      img: 'assets/skills_icon/javascript-icon.png',
    },
    {
      name: 'HTML',
      img: 'assets/skills_icon/html-icon.png',
    },
    {
      name: 'CSS',
      img: 'assets/skills_icon/css-icon.png',
    },
    {
      name: 'Angular',
      img: 'assets/skills_icon/angular-icon.png',
    },
    {
      name: 'Git',
      img: 'assets/skills_icon/git-icon.png',
    },
    {
      name: 'SCRUM',
      img: 'assets/skills_icon/scrum-icon.png',
    },
    {
      name: 'Rest API',
      img: 'assets/skills_icon/api-icon.png',
    },
    {
      name: 'Firebase Database',
      img: 'assets/skills_icon/database-icon.png',
    }
  ];




  constructor() {
  
  }

  ngOnInit(): void {}
}
 
