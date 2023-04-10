import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSubjectBComponentComponent } from './rxjs-subject-b-component.component';

describe('RxjsSubjectBComponentComponent', () => {
  let component: RxjsSubjectBComponentComponent;
  let fixture: ComponentFixture<RxjsSubjectBComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RxjsSubjectBComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RxjsSubjectBComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
