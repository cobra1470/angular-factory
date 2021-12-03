import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-manage-more-http',
  templateUrl: './manage-more-http.component.html',
  styleUrls: ['./manage-more-http.component.css']
})
export class ManageMoreHttpComponent implements OnInit {
  constructor(private http: HttpClient) { }

  apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  post1: any;
  post2: any;

  ngOnInit() {
    /* this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe(users => console.log(users)); */
    
    let _post1 = this.http.get(`${this.apiUrl}/1`);
    let _post2 = this.http.get(`${this.apiUrl}/2`);

    forkJoin([_post1, _post2])
      .subscribe(result => {
        this.post1 = result[0];
        this.post2 = result[1];
      })
  }

}