import { User } from './../model/user';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //API end-point
  private readonly API = 'http://54.207.173.169:8000/api/users';

  constructor(private httpClient: HttpClient) { }

  list() {
    /*
      Consume API and return the json
    */
    return this.httpClient.get<User[]>(this.API)
    .pipe(
      first(),
      tap(users => console.log(users))
    );
  }

  save(record: User) {
    /*
      Send an object User to API to register
    */
    return this.httpClient.post<User>(this.API, record);
  }
}
