/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, async, inject, tick,fakeAsync } from '@angular/core/testing';
import { FormHttpService } from './form-http.service';

describe('Service: FormHttp', () => {
  let service:FormHttpService;
  let httpTestingController:HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FormHttpService]
    });
    service =  TestBed.inject(FormHttpService)
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should ...', () => {
    expect(service).toBeTruthy();
  });

  it('Test getHeroInfo',fakeAsync( () => {
    let _heroInfo = {
      "heroUrl": "api/hero",
      "name": "Cobra1",
      "date": "2021-11-08",
      "isMain": true
    }
    service.getHeroInfo().subscribe(data => {
      // console.log(data)
      // expect(data).toEqual(_heroInfo);
      expect(data).toEqual(_heroInfo);
    })
    
    // expect(data).toEqual(_heroInfo);
    const req = httpTestingController.expectOne(service.formHttpUrl);
    // expect(req.request.method).toEqual('POST');
    req.flush(_heroInfo)
    tick()
  }));


});
