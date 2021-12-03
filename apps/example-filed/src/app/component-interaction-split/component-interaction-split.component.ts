import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'default-angular-factory-component-interaction-split',
  templateUrl: './component-interaction-split.component.html',
  styleUrls: ['./component-interaction-split.component.scss']
})
export class ComponentInteractionSplitComponent implements OnInit {
  public interactionForm: any;
  public isSaveBarOpened: boolean = false;
  public educationOptins: Array<any> = [];
  @ViewChild('defaultOptions') defaultOptions: any;
  @ViewChild('sectionA') sectionA: any;

  constructor(private formBuilder: FormBuilder) { }

  public toggleSaveBar():void {
    this.isSaveBarOpened = !this.isSaveBarOpened;
  }

  public handleEmitter():void {
    this.isSaveBarOpened = true;
  }

  public submitForm():void {
    // console.log('defaultOptions', this.defaultOptions);
    // this.defaultOptions.validForm();
    console.log('defaultOptions valid', this.defaultOptions.formGroupData.valid);
    console.log('defaultOptions', this.defaultOptions.formGroupData.value);
    console.log('sectionA', this.sectionA.formGroupData.value);
    this.toggleSaveBar();
  }

  public initForm():void {
    this.interactionForm = this.formBuilder.group({
      defaultOptions: this.formBuilder.group({
        fullName: [''],
        gender: [''],
        hightestEducation: [''],
      }),
      sectionA: this.formBuilder.group({
        address: [''],
        mainContact: [false]
      })
    });
  }

  public setFormGroupData():void {
    this.interactionForm.patchValue({
      defaultOptions: {
        fullName: 'Cobra Liu',
        gender: '0',
        hightestEducation: '0',
      },
      sectionA: {
        address: 'Hefei NO.009865',
        mainContact: true
      }
    })
  }

  public setOptionsData():void {
    this.educationOptins = [
      { label: 'PhD', value: '0' },
      { label: 'Master', value: '1' },
      { label: 'Undergraduate', value: '2' },
      { label: 'Junior college', value: '3' },
    ]
  }

  ngOnInit():void {
    this.initForm();
    // simulate async data
    setTimeout(() => {
      this.setOptionsData();
      this.setFormGroupData();
    }, 1000);
  }
}
