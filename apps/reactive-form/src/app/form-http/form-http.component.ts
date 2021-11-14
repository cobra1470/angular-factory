import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormHttpService } from './form-http.service';

@Component({
  selector: 'nx-angular-practice-form-http',
  templateUrl: './form-http.component.html',
  styleUrls: ['./form-http.component.css']
})
export class FormHttpComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private formHttpService: FormHttpService
  ) { 
  }

  ngOnInit() {
    // this.getHeroInfo()
  }

  public heroForm = this.formBuilder.group({
    heroUrl: '',
    name: '',
    date: '',
    isMain: false
  });
  getHeroInfo() {
    this.formHttpService.getHeroInfo()
      .subscribe(data => {
        this.heroForm.patchValue({...data});
        // console.log(this.heroForm.value);
      })
    
    /* this.formHttpService.getHeroInfoResponse()
      .subscribe(resp => {
        const keys = resp.headers.keys();
        keys.map(key => {
          console.log(`${key}: ${resp.headers.get(key)}`)
        })
        this.heroForm.patchValue({...resp.body})
      }); */
  }
  updatHeroInfo() {
    this.formHttpService.updateHeroInfo(this.heroForm.value)
      .subscribe(data => {
        // console.log('data', data);
      });
  }

  add(a:number):number {
    return a+this.formHttpService.getValue()
  }
}