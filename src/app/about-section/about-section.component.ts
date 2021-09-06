import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss'],
})
export class AboutSectionComponent implements OnInit {
  stories = [
    {
      title: 'test',
      description: 'lorem',
      icon: 'assets/story_icons/walk-line.png',
    },
    {
      title: 'test',
      description: 'lorem',
      icon: 'assets/story_icons/heart-line.png',
    },
    {
      title: 'test',
      description: 'lorem',
      icon: 'assets/story_icons/search-line.png',
    },
    {
      title: 'test',
      description: 'lorem',
      icon: 'assets/story_icons/flight-takeoff-line.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
