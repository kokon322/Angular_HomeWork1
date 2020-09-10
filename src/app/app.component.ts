import { Component } from '@angular/core';
import {UserService} from './serveces/user.service';
import {UserModel} from './models/user.model';
import {of} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users : UserModel[] = [];
  constructor(private userRervice: UserService) {
    userRervice.getUsers().subscribe(jsonUsers => {
      for( let x in jsonUsers){
        this.users.push(jsonUsers[x]);
      }
      console.log(this.users);
    });

    }
  delete(){
      this.users.length = 0;
    }


}
