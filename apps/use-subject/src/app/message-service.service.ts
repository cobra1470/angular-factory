import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  private asyncSubject: AsyncSubject<number> = new AsyncSubject<number>();
  private behaviorSubject: BehaviorSubject<string> = new BehaviorSubject<string>('This is default share data.');
  private replaySubject: ReplaySubject<number> = new ReplaySubject<number>(3);
  private shareData: Subject<string> = new Subject<string>();

  public currentBehaviorSubject = this.behaviorSubject.asObservable();

  public sendData(value: string): void {
    this.shareData.next(value);
  }

  public getData(): Observable<string> {
    return this.shareData.asObservable();
  }

  public updateBehaviorSubject(value: string): void {
    this.behaviorSubject.next(value);
  }

  public sendReplaySubject(): void {
    this.replaySubject.next(1);
    this.replaySubject.next(2);
    this.replaySubject.next(3);
    this.replaySubject.next(4);
    this.replaySubject.next(5);
  }

  public getReplaySubject(): Observable<number> {
    return this.replaySubject.asObservable();
  }

  public sendAsyncSubject(): void {
    this.asyncSubject.next(10001);
    this.asyncSubject.next(10002);
    this.asyncSubject.next(10003);
    this.asyncSubject.complete();
    this.asyncSubject.next(10004);
  }

  public getAsyncSubject(): Observable<number> {
    return this.asyncSubject.asObservable();
  }

}
