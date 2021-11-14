/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroRouteShellComponent } from './hero-route-shell.component';
import { provideMockObject } from '../common/utils';
import { BehaviorSubject, Subject } from 'rxjs';

describe('HeroRouteShellComponent', () => {
  let component: HeroRouteShellComponent;
  let fixture: ComponentFixture<HeroRouteShellComponent>;
  let activatedRoute: jest.Mocked<ActivatedRoute>
  let router: jest.Mocked<Router>
  let mockTotal: Subject<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [provideMockObject(ActivatedRoute), provideMockObject(Router)],
      declarations: [ HeroRouteShellComponent ]
    })
    .compileComponents();
    activatedRoute = TestBed.inject(ActivatedRoute) as jest.Mocked<ActivatedRoute>
    router = TestBed.inject(Router) as jest.Mocked<Router>
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroRouteShellComponent);
    mockTotal = new BehaviorSubject({siteUrl:'123'});
    activatedRoute.queryParams = mockTotal.asObservable();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test goToHeroRoute function', () => {
    component.goToHeroRoute();
    expect(router.navigate).toHaveBeenCalledWith(
      ['hero-route'],
      {
        queryParams: component.routeParams
      }
    );
  });
});
