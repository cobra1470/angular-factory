import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionTransferDefaultOptionsComponent } from './interaction-transfer-default-options.component';

describe('InteractionTransferDefaultOptionsComponent', () => {
  let component: InteractionTransferDefaultOptionsComponent;
  let fixture: ComponentFixture<InteractionTransferDefaultOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionTransferDefaultOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionTransferDefaultOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
