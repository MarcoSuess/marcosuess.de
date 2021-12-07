import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnchorScrollService {
  constructor() {}

  public scrollTo(elementId: string): void {
    document.getElementById(elementId)?.scrollIntoView();
  }
}
