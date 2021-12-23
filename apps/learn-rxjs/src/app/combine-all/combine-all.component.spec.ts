import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineAllComponent } from './combine-all.component';

describe('CombineAllComponent', () => {
  let component: CombineAllComponent;
  let fixture: ComponentFixture<CombineAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombineAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombineAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
