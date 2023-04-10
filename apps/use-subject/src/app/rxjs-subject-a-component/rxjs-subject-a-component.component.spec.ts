import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSubjectAComponentComponent } from './rxjs-subject-a-component.component';

describe('RxjsSubjectAComponentComponent', () => {
  let component: RxjsSubjectAComponentComponent;
  let fixture: ComponentFixture<RxjsSubjectAComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RxjsSubjectAComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RxjsSubjectAComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
