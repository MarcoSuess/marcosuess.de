import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.scss'],
})
export class WorkSectionComponent  {

  constructor(public projektService: ProjectsService) {}

 
}
