import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSubmitReportComponent } from './dialog-submit-report.component';

describe('DialogSubmitReportComponent', () => {
  let component: DialogSubmitReportComponent;
  let fixture: ComponentFixture<DialogSubmitReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSubmitReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSubmitReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
