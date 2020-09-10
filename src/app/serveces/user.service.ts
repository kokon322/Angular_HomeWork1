import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}
  getUsers(): Observable<object>{
    return this.http.get<object>('https://lesson----vue.firebaseio.com/todo.json');
  }
}
