import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnChangesChildComponent } from './ng-on-changes-child.component';

describe('NgOnChangesChildComponent', () => {
  let component: NgOnChangesChildComponent;
  let fixture: ComponentFixture<NgOnChangesChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgOnChangesChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOnChangesChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
