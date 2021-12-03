import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInteractionSplitComponent } from './component-interaction-split.component';

describe('ComponentInteractionSplitComponent', () => {
  let component: ComponentInteractionSplitComponent;
  let fixture: ComponentFixture<ComponentInteractionSplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentInteractionSplitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInteractionSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
