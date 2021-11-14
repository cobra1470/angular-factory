/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ProfileEditorFormBuilderComponent } from './profile-editor-form-builder.component';

describe('ProfileEditorFormBuilderComponent', () => {
  let component: ProfileEditorFormBuilderComponent;
  let fixture: ComponentFixture<ProfileEditorFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas:[NO_ERRORS_SCHEMA],
      providers: [FormBuilder],
      declarations: [ ProfileEditorFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditorFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
