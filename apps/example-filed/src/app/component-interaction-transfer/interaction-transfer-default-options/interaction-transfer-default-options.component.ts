import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'factory-interaction-transfer-default-options',
  templateUrl: './interaction-transfer-default-options.component.html',
  styleUrls: ['./interaction-transfer-default-options.component.scss']
})
export class InteractionTransferDefaultOptionsComponent implements OnInit {
  @Input() group!: FormGroup;
  @Input() educationOptins: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }
}
