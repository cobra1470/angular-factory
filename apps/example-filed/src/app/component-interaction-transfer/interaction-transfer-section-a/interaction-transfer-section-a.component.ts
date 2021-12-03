import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'factory-interaction-transfer-section-a',
  templateUrl: './interaction-transfer-section-a.component.html',
  styleUrls: ['./interaction-transfer-section-a.component.scss']
})
export class InteractionTransferSectionAComponent implements OnInit {
  @Input() group!: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
