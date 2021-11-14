import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface HeroInfo {
  heroUrl: string;
  name: string;
  date: any;
  isMain: boolean;
}

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
    Authorization: 'my-auth-token'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FormHttpService {
  public formHttpUrl = 'assets/form-http.json';
  public heroUrl = 'api/hero';
  public value:number = 4;

  constructor(
    private http: HttpClient
  ) { }
  

  getValue() {
    return this.value
  }
  getHeroInfo() {
    return this.http.get<HeroInfo>(this.formHttpUrl);
  }

  getHeroInfoResponse():Observable<HttpResponse<HeroInfo>> {
    return this.http.get<HeroInfo>(this.formHttpUrl, {
      observe: 'response'
    });
  }
  
  updateHeroInfo(heroInfo: HeroInfo):Observable<HeroInfo> {
    return this.http.post<HeroInfo>(this.heroUrl, heroInfo, httpOptions);
  }
}
