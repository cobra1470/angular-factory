import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionSplitDefaultOptionsComponent } from './interaction-split-default-options.component';

describe('InteractionSplitDefaultOptionsComponent', () => {
  let component: InteractionSplitDefaultOptionsComponent;
  let fixture: ComponentFixture<InteractionSplitDefaultOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionSplitDefaultOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionSplitDefaultOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
