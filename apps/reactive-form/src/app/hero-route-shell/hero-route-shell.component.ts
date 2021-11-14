import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hero-route-shell',
  templateUrl: './hero-route-shell.component.html',
  styleUrls: ['./hero-route-shell.component.css']
})
export class HeroRouteShellComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('params', params);
    });
  }

  public routeParams = {
    name: 'Cobra',
    id: 1234
  }

  public goToHeroRoute():void {
    this.router.navigate(['hero-route'], {
      queryParams: this.routeParams
    });
  }
}