import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { AuthProvider } from './auth/auth';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { environment } from '../environments/environment';

@Injectable()
export class FavoriteData {

  // apiPath = "http://localhost:3000"
  // apiPath = environment.path;
  apiPath = "https://api-server-sheen.herokuapp.com";

  constructor(public http: Http) { }

  saveFavorite(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiPath + '/favorite', data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  checkIfFavoriteForUser(favoriteId){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiPath + '/favorite/' + favoriteId)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteFavorite(favoriteId){
    return new Promise((resolve, reject) => {
      this.http.delete(this.apiPath + '/favorite/' + favoriteId)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getFavoritesByUID(UID) {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiPath + '/favorite/user/' + UID)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
