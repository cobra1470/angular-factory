import { Component, OnInit } from '@angular/core';
import { IUserProfile } from './ng-on-changes.types';

@Component({
  selector: 'app-ng-on-changes',
  templateUrl: './ng-on-changes.component.html',
})
export class NgOnChangesComponent implements OnInit {
  public userProfile: IUserProfile = {
    name: 'c',
    age: 3,
    hobby: ['c']
  };
  public name!: string;
  public age!: number;
  public hobby!: string;

  public changeProfile(): void {
    this.userProfile = {
      name: this.name,
      age: this.age,
      hobby: this.hobby.split(',')
    }
  }

  public changeHobby(): void {
    // this.userProfile.hobby = ['c3333'];
    // this.userProfile.hobby = this.userProfile.hobby.slice()
    this.userProfile = {
      name: this.name,
      age: this.age,
      hobby: [...this.hobby.split(','), 'ccc']
    }
  }

  public ngOnInit(): void {
    
  }

}
