import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnchorScrollService {
  constructor() {}


  /**
   * This function scroll to the ParamId section.
   * @param {string} elementId 
   */
  public scrollTo(elementId: string): void {
    document.getElementById(elementId)?.scrollIntoView();
  }
}
