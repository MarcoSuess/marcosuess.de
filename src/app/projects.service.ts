import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects = [
    {
      name: 'Ring of Fire',
      description: 'Angular based Card Counting Game',
      category: 'Angular',
      showDescription: false,
      image: 'assets/project-images/ringoffire.png',
      jsDocUrl: 'compodoc/ringoffire-doc/index.html',
      projectUrl: 'https://ring-of-fire-44c7a.web.app',
    },
    {
      name: 'Sharkie',
      description:
        'Sharkie is a jump and run browser and android game made with Javascript.',
      category: 'Java Script',
      showDescription: false,
      image: 'assets/project-images/sharkie.png',
      jsDocUrl: 'http://marcosuess.net/Sharkie/out/',
      projectUrl: 'http://marcosuess.net/Sharkie/',
    },
    {
      name: 'Wichtel-App',
      description: 'Angular based Wichtel-App',
      category: 'Angular',
      showDescription: false,
      image: 'assets/project-images/wichtel-app.png',
      jsDocUrl: 'compodoc/wichtelapp-doc/index.html',
      projectUrl: 'https://wichteln-acefa.web.app/sign-in',
    },
    {
      name: 'Slack Clone',
      description: 'Based on Slack with Angular and Firebase',
      category: 'Angular',
      showDescription: false,
      image: 'assets/project-images/slack-clone.jpg',
      jsDocUrl: 'compodoc/slack-doc/index.html',
      projectUrl: 'https://slack-55c68.web.app/sign-in',
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

  showProjects: any = [];
  zoomAnimation: boolean = false;

  constructor() {}

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
    this.zoomAnimation = true;
    let filterProjects = this.projects.filter(
      (project) => project.category == title
    );

    this.showProjects = filterProjects;

    if (filterProjects.length == 0) {
      console.log(this.projects);

      this.showProjects = this.projects;
    }
    setTimeout(() => {
      this.zoomAnimation = false;
    }, 324);
  
  }
}
