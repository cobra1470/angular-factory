import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'nx-angular-practice-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zipCode: new FormControl('')
    }),
    lang: new FormControl('')
  });

  onSubmit():void {
    console.warn(this.profileForm);
  }

  updateProfile():void {
    this.profileForm.patchValue({
      firstName: 'Cobra',
      address: {
        street: '123 Dew Street.'
      }
    });
  }

  changeLang(lang: string):void {
    console.log('lang', lang);
    this.profileForm.patchValue({
      lang: lang
    });
  }
}
