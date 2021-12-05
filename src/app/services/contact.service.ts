import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { DialogSubmitReportComponent } from '../dialog-submit-report/dialog-submit-report.component';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  endpoint = '/app/send_mail.php';
  submitReport: string = '';
  submitComplete = false;
  public errorMessage: boolean = false;

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  public onSubmit(myForm: NgForm) {
    console.log(myForm.value);

    if (myForm.valid) {
      this.sendForm(myForm);
    }
  }

  sendForm(form: any) {
    this.http.post(this.endpoint, form.value).subscribe(
      (response) => this.handleResponse(response, form),
      (error) => this.handleError(error, form)
    );
  }

  handleResponse(response: any, form: any) {
    this.submitReportDialogOpen()
    console.log(response);
    this.submitReport =
      'Thank up for your Contact. I will replay as soon as possible!';
    this.submitComplete = true;
    form.reset();
  }

  handleError(error: any, form: any) {
    this.submitReportDialogOpen()
    this.errorMessage = true;
    console.log(error);
    this.submitReport =
      'Error occure while sending your message!  You can contact me directly on E-Mail:';
    this.submitComplete = true;
    form.reset();
  }

  public closeCard() {
    this.errorMessage = false;
    this.submitComplete = false;
    this.dialog.closeAll();
    this.submitReport = '';
  }

  submitReportDialogOpen() {
    this.dialog.open(DialogSubmitReportComponent)
  }
}
