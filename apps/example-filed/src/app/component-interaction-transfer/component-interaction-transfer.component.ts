import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'default-angular-factory-component-interaction-transfer',
  templateUrl: './component-interaction-transfer.component.html',
  styleUrls: ['./component-interaction-transfer.component.scss']
})
export class ComponentInteractionTransferComponent implements OnInit {
  public interactionForm: any;
  public isSaveBarOpened = false;
  public educationOptins: Array<any> = [];

  constructor( private formBuilder: FormBuilder ) { }

  public toggleSaveBar():void {
    this.isSaveBarOpened = !this.isSaveBarOpened;
  }

  public isChangeForm():boolean {
    return this.interactionForm.dirty || this.interactionForm.touched;
  }

  public submitForm():void {
    console.log('interactionForm', this.interactionForm.value);
    this.toggleSaveBar();
  }

  public initForm():void {
    this.interactionForm = this.formBuilder.group({
      defaultOptions: this.formBuilder.group({
        fullName: [''],
        gender: [''],
        hightestEducation: ['']
      }),
      sectionA: this.formBuilder.group({
        address: [''],
        mainContact: [false]
      })
    });
    
    this.interactionForm.valueChanges.subscribe((data: string | object | undefined) => {
      this.isSaveBarOpened  = this.isChangeForm();
    });
  }

  public setFormGroupData():void {
    this.interactionForm.patchValue({
      defaultOptions: {
        fullName: 'Cobra Liu',
        gender: '0',
        hightestEducation: '2'
      },
      sectionA: {
        address: 'Hefei NO.1234',
        mainContact: true
      }
    });
  }

  public setOptionsData():void {
    this.educationOptins = [
      { label: 'PhD', value: '0' },
      { label: 'Master', value: '1' },
      { label: 'Undergraduate', value: '2' },
      { label: 'Junior college', value: '3' },
    ]
  }

  ngOnInit() {
    this.initForm();

    // simulate async data
    setTimeout(() => {
      this.setOptionsData();
    }, 1000);

    setTimeout(() => {
      this.setFormGroupData();
    }, 2000);

  }
}
