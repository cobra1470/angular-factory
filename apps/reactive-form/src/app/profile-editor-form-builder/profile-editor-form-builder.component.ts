import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { forbiddenNameValidator } from '../common/forbidden-name-validator'

@Component({
  selector: 'nx-angular-practice-profile-editor-form-builder',
  templateUrl: './profile-editor-form-builder.component.html',
  styleUrls: ['./profile-editor-form-builder.component.css']
})
export class ProfileEditorFormBuilderComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  public submitVisible = false;
  public profileForm = this.formBuilder.group({
    firstName: ['',
      [
        Validators.required,
        Validators.minLength(3),
        forbiddenNameValidator(/^cobra$/i),
      ]
    ],
    lastName: ['', [Validators.required]],
    address: this.formBuilder.group({
      street: '',
      city: '',
      state: '',
      zipCode: ''
    }),
    aliases: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });

  get firstName() { return this.profileForm.get('firstName') }
  get lastName() { return this.profileForm.get('lastName') }
  get aliases() { return this.profileForm.get('aliases') as FormArray }
  get formValue() { return JSON.stringify(this.profileForm.value) }

  addAilas():void {
    this.aliases.push(this.formBuilder.control(''));
  }
  // 主动触发 form 验证
  validForm():void {
    for (const i in this.profileForm.controls) {
      if (this.profileForm.controls.hasOwnProperty(i)) {
        this.profileForm.controls[i].markAsDirty();
        this.profileForm.controls[i].updateValueAndValidity();
      }
    }
  }

  onSubmit():void {
    console.warn(this.profileForm);
    console.warn('firstName', this.firstName?.value)
  }

  updateProfile():void {
    this.profileForm.patchValue({
      firstName: 'Cobra',
      address: {
        street: '123 Dew Street.'
      }
    });
    this.validForm();
    console.log(this.profileForm.valid);
  }

  ngOnInit() {
    this.profileForm.valueChanges.subscribe(data => {
      this.submitVisible = true;
      console.log('form', data);
    })
  }
}