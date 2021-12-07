import { Component, OnInit } from '@angular/core';
import { AnchorScrollService } from '../anchor-scroll.service';

@Component({
  selector: 'app-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: ['./home-contact.component.scss'],
})
export class HomeContactComponent implements OnInit {
  constructor(public scrollService: AnchorScrollService) {}

  ngOnInit(): void {}
}
