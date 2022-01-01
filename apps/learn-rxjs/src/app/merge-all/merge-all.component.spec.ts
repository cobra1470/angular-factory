import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeAllComponent } from './merge-all.component';

describe('MergeAllComponent', () => {
  let component: MergeAllComponent;
  let fixture: ComponentFixture<MergeAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
