import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatAllComponent } from './concat-all.component';

describe('ConcatAllComponent', () => {
  let component: ConcatAllComponent;
  let fixture: ComponentFixture<ConcatAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
