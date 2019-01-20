import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser = {first: ""};
  _httpService:HttpService
  constructor() { }

  ngOnInit() {
    this.newUser = {first: ""};
  }
  submitRegister() {
    this._httpService.updateFirstName(this.newUser.first);
    this.newUser = {first: ""};
  }

}
