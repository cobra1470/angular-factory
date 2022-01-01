import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ForkJoinService {
  constructor() { }

  public makeRequest(value: string, delayDuration: number): any {
    return of(`Complete: ${value}`).pipe(
      delay(delayDuration)
    );
  }
}
