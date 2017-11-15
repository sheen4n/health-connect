import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { AuthProvider } from './auth/auth';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { environment } from '../environments/environment';

@Injectable()
export class UserData {
  users = [];
  path = environment.path + '/auth';
  chatName: string;

  // apiPath = "http://localhost:3000"
  // apiPath = environment.path;
  apiPath = "https://api-server-sheen.herokuapp.com";

  constructor(public http: Http) { }

  registerUser(registerData) {
    this.http.post(this.apiPath + '/auth/register', registerData).subscribe(res => {
      // this.saveToken(res.token());
    });
  }

  getUsers() {
    this.http.get(this.apiPath + '/users').subscribe(res => {
      // console.log(res);
      this.users = res.json();
    });
  }

  getAllProUsers() {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiPath + '/prousers')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getUserByUID(UID) {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiPath + '/profile/' + UID)
        .map(res => res.json())
        .subscribe(res => {
          // console.log("test2", res);
          resolve(res);
        }, (err) => {
          // console.log("test3", err);
          reject(err);
        });
    });
  }

  getNameByUID(UID) {
    this.http.get(this.apiPath + '/profile/' + UID).subscribe(res => {
      // console.log(res.json(), "yu", res.json().name);
      this.chatName = res.json().name;
    })
  }

  getNormalUserByUID(UID) {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiPath + '/user/' + UID)
        .map(res => res.json())
        .subscribe(res => {
          // console.log("test2", res);
          resolve(res);
        }, (err) => {
          // console.log("test3", err);
          reject(err);
        });
    });
  }

  getProUserByUID(UID) {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiPath + '/prouser/' + UID)
        .map(res => res.json())
        .subscribe(res => {
          // console.log("test2", res);
          resolve(res);
        }, (err) => {
          // console.log("test3", err);
          reject(err);
        });
    });
  }

}
