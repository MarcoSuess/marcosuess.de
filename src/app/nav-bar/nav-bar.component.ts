import { Component, OnInit } from '@angular/core';
import { AnchorScrollService } from '../anchor-scroll.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public anchorScroll: AnchorScrollService, ) {
   
   }

  ngOnInit(): void {
  }

  
  


}
