import { Component, Input, OnChanges } from '@angular/core';
import { IUserProfile } from '../ng-on-changes.types';

@Component({
  selector: 'app-ng-on-changes-child',
  templateUrl: './ng-on-changes-child.component.html',
})
export class NgOnChangesChildComponent implements OnChanges {
  @Input() userProfile!: IUserProfile;

  public ngOnChanges(data: any): void {
    console.log(data)
  }
}
