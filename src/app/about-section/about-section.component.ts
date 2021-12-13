import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss'],
})
export class AboutSectionComponent implements OnInit {
  stories = [
    {
      title: 'Start in the Passion',
      description: 'After my training, I was allowed to develop my own storage system with Excel and found out that it makes me very happy when others benefit from it.',
      icon: 'assets/story_icons/walk-line.png',
    },
    {
      title: 'My journey of development',
      description: 'My first line of code started with a C++ Udemy course, in 2021 I decided to attend the Developer Academy and was able to develop my passion.',
      icon: 'assets/story_icons/heart-line.png',
    },
    {
      title: 'Project experience',
      description: 'You can find  complex web applications in my portfolio.',
      icon: 'assets/story_icons/search-line.png',
    },
    {
      title: 'The next Challenge',
      description: 'Im looking forward to contributing my knowledge of JavaScript and Angular to your next project.',
      icon: 'assets/story_icons/flight-takeoff-line.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
