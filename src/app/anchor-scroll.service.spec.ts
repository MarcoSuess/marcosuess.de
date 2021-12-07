import { TestBed } from '@angular/core/testing';

import { AnchorScrollService } from './anchor-scroll.service';

describe('AnchorScrollService', () => {
  let service: AnchorScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnchorScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
