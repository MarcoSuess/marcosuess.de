import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDataProtectionComponent } from '../dialog-data-protection/dialog-data-protection.component';
import { DialogLegalNoticeComponent } from '../dialog-legal-notice/dialog-legal-notice.component';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss']
})
export class FooterSectionComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  /**
   * Open the dialog : Legal Notice.
   */
  openDialogLegalNotice() {
    this.matDialog.open(DialogLegalNoticeComponent)
  }


  /**
   * Open the dialog : Data Protection.
   */
  openDialogDataProtection() {
    this.matDialog.open(DialogDataProtectionComponent)
  }

}
