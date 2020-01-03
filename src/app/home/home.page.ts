import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users: any;
  constructor(private httpClient : HttpClient) {
    this.getUsers();
  }
  getUsers() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (response) => {
        this.users = response;
      }
    )
  }
}
