import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { AuthProvider } from './auth/auth';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { environment } from '../environments/environment';

@Injectable()
export class FacilityData {
  users = [];
  path = environment.path + '/auth';
  chatName: string;

  // apiPath = "http://localhost:3000"
  // apiPath = environment.path;
  apiPath = "https://api-server-sheen.herokuapp.com";

  constructor(public http: Http) { }

  getUsers() {
    this.http.get(this.apiPath + '/users').subscribe(res => {
      // console.log(res);
      this.users = res.json();
    });
  }

  getAllFacilities() {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiPath + '/facility/all')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getAllFacilitiesForOneUser(ownerUID) {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiPath + '/facility/owner/' + ownerUID)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getFacilityByID(facilityId) {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiPath + '/facility/' + facilityId)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  saveFacility(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiPath + '/facility', data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateFacility(facilityId, data) {
    return new Promise((resolve, reject) => {
      console.log(data, "data");
      this.http.put(this.apiPath + '/facility/' + facilityId, data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteFacility(facilityId) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.apiPath + '/facility/' + facilityId)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
