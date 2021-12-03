import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'factory-interaction-split-section-a',
  templateUrl: './interaction-split-section-a.component.html',
  styleUrls: ['./interaction-split-section-a.component.scss']
})
export class InteractionSplitSectionAComponent implements OnInit {
  @Input() group!: FormGroup;
  @Output() valueChanges = new EventEmitter<string | object>();
  public formGroupData!: FormGroup;

  constructor( private formBuilder: FormBuilder ) { }
  
  public isChangeForm():boolean {
    return this.formGroupData.dirty || this.formGroupData.touched;
  }

  public initForm():void {
    // create formGroup
    this.formGroupData = this.formBuilder.group({
      address: [''],
      mainContact: [false],
    });

    // subscribe parent data then merge to formGroup
    this.group.valueChanges.subscribe((data: any) => {
      this.formGroupData.patchValue({...data});
    });

    // subscribe formGroup then emitter parent
    this.formGroupData.valueChanges.subscribe(() => {
      this.isChangeForm() && this.valueChanges.emit();
    });
  }
  
  ngOnInit() {
    this.initForm();
  }

}