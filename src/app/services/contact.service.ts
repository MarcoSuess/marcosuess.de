import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { DialogSubmitReportComponent } from '../dialog-submit-report/dialog-submit-report.component';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  endpoint = './send_mail.php';
  submitReport: string = '';
  submitComplete = false;
  public errorMessage: boolean = false;

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  /**
   * This function check the Form.
   * @param {NgForm} myForm
   */
  public onSubmit(myForm: NgForm) {
    if (myForm.valid) {
      this.sendForm(myForm);
    }
  }


  /**
   * Send the Form.
   * @param {NgForm} form 
   */
  sendForm(form: NgForm) {
    this.http.post(this.endpoint, form.value).subscribe(
      (response) => {
        this.handleResponse(response, form);
      },
      (error) => {
        this.handleError(error, form);
      }
    );
  }

  /**
   * This function handle the Response.
   * @param {any} response 
   * @param {NgForm} form 
   */
  handleResponse(response: any, form: NgForm) {
    this.submitReportDialogOpen();
    console.log(response);
    this.submitReport =
      'Thank up for your Contact. I will reply as soon as possible!';
    this.submitComplete = true;
    form.reset();
  } 


  /**
   * This function handle the Error.
   * @param {string} error 
   * @param {NgForm} form 
   */
  handleError(error: string, form: NgForm) {
    this.submitReportDialogOpen();
    this.errorMessage = true;
    console.log(error);
    this.submitReport =
      'Error occure while sending your message!  You can contact me directly on E-Mail:';
    this.submitComplete = true;
    form.reset();
  }


  /**
   * This function close The dialog and reset the Form.
   */
  public closeCard() {
    this.errorMessage = false;
    this.submitComplete = false;
    this.dialog.closeAll();
    this.submitReport = '';
  }

  /**
   * open the submit report component.
   */
  submitReportDialogOpen() {
    this.dialog.open(DialogSubmitReportComponent);
  }
}
