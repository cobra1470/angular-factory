import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInteractionTransferComponent } from './component-interaction-transfer.component';

describe('ComponentInteractionTransferComponent', () => {
  let component: ComponentInteractionTransferComponent;
  let fixture: ComponentFixture<ComponentInteractionTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentInteractionTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInteractionTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
