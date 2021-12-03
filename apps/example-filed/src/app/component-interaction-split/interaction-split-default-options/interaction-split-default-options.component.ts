import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'factory-interaction-split-default-options',
  templateUrl: './interaction-split-default-options.component.html',
  styleUrls: ['./interaction-split-default-options.component.scss']
})
export class InteractionSplitDefaultOptionsComponent implements OnInit {
  @Input() group!: FormGroup;
  @Input() educationOptins: Array<any> = [];
  @Output() valueChanges = new EventEmitter<string | object>();
  public formGroupData!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  // if form changed by user
  public isChangeForm():boolean {
    return this.formGroupData.dirty || this.formGroupData.touched;
  }
  
  get fullName() { return this.formGroupData.get('fullName') }

  public validForm():void {
    for (const i in this.formGroupData.controls) {
      if (this.formGroupData.controls.hasOwnProperty(i)) {
        this.formGroupData.controls[i].markAsDirty();
        this.formGroupData.controls[i].updateValueAndValidity();
      }
    }
  }

  public initForm():void {
    // create formGroup
    this.formGroupData = this.formBuilder.group({
      fullName: ['', [
        Validators.required
      ]],
      gender: [''],
      hightestEducation: [''],
    });

    // subscirbe parent data than merge to formGroup
    this.group.valueChanges.subscribe((data: any) => {
      this.formGroupData.patchValue({...data});
    });
    
    // subscribe formGroup then emitter parent
    this.formGroupData.valueChanges.subscribe(() => {
      this.isChangeForm() && this.valueChanges.emit();
    });
  }

  ngOnInit(): void {
    this.initForm();
  }
}
