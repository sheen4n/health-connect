import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NgForm } from '@angular/forms';
import { FacilityData } from './../../providers/facility-data';

import { Storage } from '@ionic/storage';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the EditFacilityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-facility',
  templateUrl: 'edit-facility.html',
})
export class EditFacilityPage {

  facilityId: any;
  facility: {
    name?: string,
    address?: string,
    postal?: string,
    publicOrPrivate?: string,
    lat?: number,
    lng?: number,
    facilityType?: string,
    description?: string,
    openingHours?: string,
    peakHours?: string,
    serviceProvided?: string,
    ownerUID?: string,
    healthcareGroup?: string,
    detectedAddress?: string
  } = {};
  submitted = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public facilityData: FacilityData) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditFacilityPage');
    this.facilityId = this.navParams.data.facilityId;
    this.getFacilityDetail(this.facilityId);
  }

  getFacilityDetail(facilityId) {
    this.facilityData.getFacilityByID(facilityId).then((res) => {
      this.facility = res;
      console.log(this.facility);
    }, (err) => {
      console.log(err);
    });
  }


  updateFacility(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.facilityData.updateFacility(this.facilityId, this.facility).then((result) => {
        this.navCtrl.setRoot(TabsPage);
      }, (err) => {
        console.log(err);
      });
    }
  }

  deleteFacility(facilityId){
    this.facilityData.deleteFacility(facilityId).then((result) => {
      // this.navCtrl.setRoot(TabsPage);
      this.navCtrl.popToRoot();
    }, (err) => {
      console.log(err);
    });
  }

  onPostalChange(postalCode) {
    var googleMapsClient = require('@google/maps').createClient({
      key: '',
      Promise: Promise // 'Promise' is the native constructor.
    });


    googleMapsClient.geocode({
      address: postalCode + ', Singapore',
      region: 'SG'
    }).asPromise()
    .then((response) => {
      console.log(response.json.results);
      console.log(response, response.json.results[0].geometry.location.lat,response.json.results[0].geometry.location.lng);
      this.facility.lat = response.json.results[0].geometry.location.lat;
      this.facility.lng = response.json.results[0].geometry.location.lng;
      this.facility.detectedAddress = response.json.results[0].address_components[1].long_name;
    })
    .catch((err) => {
      console.log(err);
    });
  }

}
