import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'factory-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {
  public runPublish(): void {
    console.log('runPublish');
  }

  ngOnInit(): void {
    this.runPublish();
  }

}
