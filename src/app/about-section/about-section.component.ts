import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss'],
})
export class AboutSectionComponent implements OnInit {
  stories = [
    {
      title: '#1 Start in the Passion',
      description: 'after completing my training, i was able to develop my own system with excel and have found that i am very happy when others benefit from it.',
      icon: 'assets/story_icons/walk-line.png',
    },
    {
      title: '#My journey of development',
      description: 'During the time when I was unemployed, I thought a lot about my professional life, I started with c ++ udemy courses, but I noticed that it hadn t brought me any further. In 2021 I decided to go to the Developer Academy and was able to develop my entire passion through it.',
      icon: 'assets/story_icons/heart-line.png',
    },
    {
      title: '3# Project experience',
      description: 'You can find everything from simple landing pages to complex web applications in my portfolio.',
      icon: 'assets/story_icons/search-line.png',
    },
    {
      title: '4# The next Challenge',
      description: 'Im looking forward to contribute my knowledge of Javascript and Angular to your next project.',
      icon: 'assets/story_icons/flight-takeoff-line.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
