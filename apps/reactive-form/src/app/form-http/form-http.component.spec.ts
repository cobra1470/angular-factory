/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { FormHttpService } from './form-http.service';
import { provideMockObject } from '../common/utils'
import { FormHttpComponent } from './form-http.component';

describe('FormHttpComponent', () => {
  let component: FormHttpComponent;
  let fixture: ComponentFixture<FormHttpComponent>;
  let service: jest.Mocked<FormHttpService>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas:[NO_ERRORS_SCHEMA],
      imports: [HttpClientTestingModule],
      declarations: [ FormHttpComponent ],
      providers:[
        FormBuilder,
        provideMockObject(FormHttpService)
      ]
    })
    .compileComponents();
    service = TestBed.inject(FormHttpService) as jest.Mocked<FormHttpService>
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHttpComponent);
    component = fixture.componentInstance;
    service.getHeroInfo.mockReturnValue(of({
      "heroUrl": "api/hero",
      "name": "Cobra11",
      "date": "2021-11-08",
      "isMain": true
    }))
    service.updateHeroInfo.mockReturnValue(of({
      "heroUrl": "api/hero",
      "name": "Cobra11",
      "date": "2021-11-08",
      "isMain": true
    }))
    service.getValue.mockReturnValue(5)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test getHeroInfo', fakeAsync(() => {
    fixture.detectChanges()
    component.getHeroInfo()
    // tick()
    // console.log(component.heroForm)
    // component.
    // tick()
    expect(component.heroForm.value.name).toEqual('Cobra11');
  }));

  it('test updateHeroInfo', fakeAsync(() => {
    const spyOnUpdateHeroInfo =  jest.spyOn(service,'updateHeroInfo')
    component.updatHeroInfo()
    // tick()
    expect(spyOnUpdateHeroInfo).toHaveBeenCalledTimes(1)
  }));

  it('test add', () => {
    expect(component.add(1)).toEqual(6)
    // expect(component.add(1)).toEqual(5)
  });
});
