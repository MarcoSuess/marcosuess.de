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
      description: 'after completing my training, i was able to develop my own system with excel and have found that i am very happy when others benefit from it.',
      icon: 'assets/story_icons/walk-line.png',
    },
    {
      title: 'My journey of development',
      description: 'I started with C++ Udemy courses, but I noticed that it hadn t brought me any further. In 2021 I decided to go to the Developer Academy and was able to develop my entire passion through it.',
      icon: 'assets/story_icons/heart-line.png',
    },
    {
      title: 'Project experience',
      description: 'You can find  complex web applications in my portfolio.',
      icon: 'assets/story_icons/search-line.png',
    },
    {
      title: 'The next Challenge',
      description: 'Im looking forward to contribute my knowledge of Javascript and Angular to your next project.',
      icon: 'assets/story_icons/flight-takeoff-line.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
