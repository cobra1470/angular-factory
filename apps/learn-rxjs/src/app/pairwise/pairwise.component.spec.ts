/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { pairwiseComponent } from './pairwise.component';

describe('pairwiseComponent', () => {
  let component: pairwiseComponent;
  let fixture: ComponentFixture<pairwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ pairwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(pairwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
