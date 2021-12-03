import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionTransferSectionAComponent } from './interaction-transfer-section-a.component';

describe('InteractionTransferSectionAComponent', () => {
  let component: InteractionTransferSectionAComponent;
  let fixture: ComponentFixture<InteractionTransferSectionAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionTransferSectionAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionTransferSectionAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
