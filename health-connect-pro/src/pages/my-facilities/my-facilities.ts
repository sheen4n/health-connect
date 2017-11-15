import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NgForm } from '@angular/forms';
import { FacilityData } from './../../providers/facility-data';

import { Storage } from '@ionic/storage';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Http } from '@angular/http';

import {FacilityDetailPage} from '../../app/pages';
import {EditFacilityPage} from '../../app/pages';


/**
 * Generated class for the MyFacilitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-facilities',
  templateUrl: 'my-facilities.html',
})
export class MyFacilitiesPage {
  facilities: any;
  isEmpty: boolean = true;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public facilityData: FacilityData
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyFacilitiesPage');
    this.storage.get('UID').then((val) => {
      this.getMyFacilityList(val);
    });

  }

  goToFacilityDetail(facilityId) {
    console.log("clicked");
    this.navCtrl.push(FacilityDetailPage, { facilityId: facilityId});
  }

  getMyFacilityList(ownerUID) {
    this.facilityData.getAllFacilitiesForOneUser(ownerUID).then((res) => {
      this.facilities = res;
      if (this.facilities.length == 0) {this.isEmpty = true} else {this.isEmpty = false };
    }, (err) => {
      console.log(err);
    });
  }

  getBadgeClass(facility) {

        return facility.publicOrPrivate.indexOf('Public') === 0 ? 'primary' : 'danger';
      }



}
