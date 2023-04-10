import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSubjectCComponentComponent } from './rxjs-subject-c-component.component';

describe('RxjsSubjectCComponentComponent', () => {
  let component: RxjsSubjectCComponentComponent;
  let fixture: ComponentFixture<RxjsSubjectCComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RxjsSubjectCComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RxjsSubjectCComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
