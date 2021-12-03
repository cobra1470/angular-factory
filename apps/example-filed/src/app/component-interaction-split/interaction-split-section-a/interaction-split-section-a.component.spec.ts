import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionSplitSectionAComponent } from './interaction-split-section-a.component';

describe('InteractionSplitSectionAComponent', () => {
  let component: InteractionSplitSectionAComponent;
  let fixture: ComponentFixture<InteractionSplitSectionAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionSplitSectionAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionSplitSectionAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
