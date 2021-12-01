import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-dialog-submit-report',
  templateUrl: './dialog-submit-report.component.html',
  styleUrls: ['./dialog-submit-report.component.scss']
})
export class DialogSubmitReportComponent implements OnInit {

  constructor(public contactService: ContactService) { }

  ngOnInit(): void {
  }

}
