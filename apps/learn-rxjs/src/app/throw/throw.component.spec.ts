import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrowComponent } from './throw.component';

describe('ThrowComponent', () => {
  let component: ThrowComponent;
  let fixture: ComponentFixture<ThrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
