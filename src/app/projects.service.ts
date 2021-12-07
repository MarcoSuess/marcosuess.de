import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects = [
    {
      name: 'Ring of Fire',
      description: 'test',
      category: 'Angular',
      showDescription: false,
      image: 'assets/project-images/ringoffire.png',
    },
    {
      name: 'Sharkie',
      description: 'tesafdf',
      category: 'Java Script',
      showDescription: false,
      image: 'assets/project-images/sharkie.png',
    },
    {
      name: 'Join',
      description: 'tesafdf',
      category: 'Java Script',
      showDescription: false,
      image: 'assets/project-images/kanban.jpg',
    },
    {
      name: 'Lieferando',
      description: 'tesafdf',
      category: 'Java Script',
      showDescription: false,
      image: 'assets/project-images/lieferando.jpg',
    },
  ];

  titles = [
    {
      name: 'All',
      active: true,
    },
    {
      name: 'Angular',
      active: false,
    },
    {
      name: 'Java Script',
      active: false,
    },
  ];

  showProjects: any;

  
  constructor() { }

 

  

  assort(title: string) {
    for (let i = 0; i < this.titles.length; i++) {
      let category = this.titles[i].name;

      if (category == title) {
        this.titles[i].active = true;
        this.filterCategory(title);
      } else {
        this.titles[i].active = false;
      }
    }
  }

  filterCategory(title: string) {
    this.showProjects = this.projects.filter(
      (project) => project.category == title
    );

    if (this.showProjects.length == 0) {
      this.showProjects = this.projects;
    }
    console.log(this.showProjects);
  }





}