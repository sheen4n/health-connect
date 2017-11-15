import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NgForm } from '@angular/forms';
import { FacilityData } from './../../providers/facility-data';

import { Storage } from '@ionic/storage';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Http } from '@angular/http';

import {EditFacilityPage} from '../../app/pages';
/**
 * Generated class for the FacilityDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-facility-detail',
  templateUrl: 'facility-detail.html',
})
export class FacilityDetailPage {

  facilityId: any;
  facility : {
    lat ?: number,
    lng ?: number,
    ownerUID ?: string,
    publicOrPrivate ?: string,
    name ?: string,
    address ?: string,
    postal ?: string,
    facilityType ?: string,
    description ?: string,
    openingHours ?: string,
    peakHours ?: string,
    serviceProvided ?: string,
    healthCareGroup ?: string
  } = {    lat : 0,
    lng : 0,
    ownerUID : '',
    publicOrPrivate : '',
    name : '',
    address : '',
    postal : '',
    facilityType : '',
    description : '',
    openingHours : '',
    peakHours : '',
    serviceProvided : '',
    healthCareGroup : ''};
  isOwner: boolean = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public facilityData: FacilityData,
    public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacilityDetailPage');
    // console.log(this.navParams.data, "Data");
    this.facilityId = this.navParams.data.facilityId;
    this.getFacilityDetail(this.facilityId);
  }

  getFacilityDetail(facilityId) {
    this.facilityData.getFacilityByID(facilityId).then((res) => {
      this.facility = res;
      console.log(this.facility);
      this.storage.get('UID').then((val) => {
        if (val == this.facility.ownerUID) {this.isOwner = true;}
      });
    }, (err) => {
      console.log(err);
    });
  }

  goToEditFacilityDetail(facilityId){
    console.log("clicked");
    this.navCtrl.push(EditFacilityPage, { facilityId: facilityId});
  }

  getClass(facility) {
    return facility.publicOrPrivate.indexOf('Public') === 0 ? 'primary' : 'danger';
  }

}
