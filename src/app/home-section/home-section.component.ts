import { Component, OnInit } from '@angular/core';
import { AnchorScrollService } from '../anchor-scroll.service';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss'],
})
export class HomeSectionComponent implements OnInit {
  constructor(public scrollService: AnchorScrollService) {}

  ngOnInit(): void {}

 
}
