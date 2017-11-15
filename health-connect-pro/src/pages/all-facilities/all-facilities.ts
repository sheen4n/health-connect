import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { NgForm } from '@angular/forms';
import { FacilityData } from './../../providers/facility-data';

import { Storage } from '@ionic/storage';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Http } from '@angular/http';

import { FacilityDetailPage } from '../../app/pages';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-facilites',
  templateUrl: 'all-facilities.html',
})
export class AllFacilitiesPage {

  facilities: any;
  originalFacilities: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public facilityData: FacilityData,
    public storage: Storage,
    public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllFacilityPage');
    this.getFacilityList();

  }

  searchFacilities(ev) {
    // Reset items back to all of the items
    this.facilities = this.originalFacilities;

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.facilities = this.facilities.filter((facility) => {
        if (
          facility.name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          facility.description.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          facility.address.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          facility.publicOrPrivate.toLowerCase().indexOf(val.toLowerCase()) > -1
        )
          return true;
      })
    }
  }

  getFacilityList() {
    this.facilityData.getAllFacilities().then((res) => {
      this.facilities = res;
      this.originalFacilities = this.facilities;
    }, (err) => {
      console.log(err);
    });
  }

  goToFacility(facilityData: any) {
    console.log("clicked");
    this.navCtrl.push(FacilityDetailPage, { facilityId: facilityData._id, name: facilityData.name });
  }

  getBadgeClass(facility) {

    return facility.publicOrPrivate.indexOf('Public') === 0 ? 'primary' : 'danger';
  }
}

