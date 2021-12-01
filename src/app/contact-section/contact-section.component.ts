import { Component, OnInit } from '@angular/core';

import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent {
  constructor(public contactService: ContactService) {}


  
  
}
