import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {


  constructor(public projectService: ProjectsService) {
  
  }

  ngOnInit(): void {
      this.projectService.showProjects = this.projectService.projects;
    
  }
}
