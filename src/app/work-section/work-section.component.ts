import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.scss'],
})
export class WorkSectionComponent implements OnInit {
  projects = [
    {
      name: 'Ring of Fire',
      description: 'test',
      category: 'Angular',
    },
    {
      name: 'Sharkie',
      description: 'tesafdf',
      category: 'Java Script',
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

  constructor() {}

  ngOnInit(): void {
    this.showProjects = this.projects;
  }
}
