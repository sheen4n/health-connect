import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from '../environments/environment';

@Injectable()
export class ChatData {

    // apiPath = "http://localhost:3000";
    // apiPath = environment.path;
    apiPath = "https://api-server-sheen.herokuapp.com";

    constructor(private http: Http) { }

    getChatByChatId(chatId) {
      return new Promise((resolve, reject) => {
        this.http.get(this.apiPath + '/chat/' + chatId)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }

    getInboxByUID(UID) {
      return new Promise((resolve, reject) => {
        this.http.get(this.apiPath + '/chat/inbox/' + UID)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }

    saveChat(data) {
      return new Promise((resolve, reject) => {
          this.http.post(this.apiPath + '/chat', data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

  }
