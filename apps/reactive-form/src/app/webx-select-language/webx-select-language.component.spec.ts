/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { WebxSelectLanguageComponent } from './webx-select-language.component';

describe('WebxSelectLanguageComponent', () => {
  let component: WebxSelectLanguageComponent;
  let fixture: ComponentFixture<WebxSelectLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas:[NO_ERRORS_SCHEMA],
      declarations: [ WebxSelectLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebxSelectLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test changeSelect function', () => {
    const _currentLang:string = '1';
    component.currentLang = _currentLang;
    component.changeLang.subscribe((currentLang:string) => expect(currentLang).toBe(_currentLang))
    component.changeSelect();
  });

  it('test getCurrrentLang function', () => {
    
  })
});
