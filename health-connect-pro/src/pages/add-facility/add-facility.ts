import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FacilityData } from './../../providers/facility-data';


import { TabsPage } from '../tabs/tabs';

import { Storage } from '@ionic/storage';

// var NodeGeocoder = require('node-geocoder');
// import { GeocoderProvider } from '../../providers/geocoder/geocoder';

/**
 * Generated class for the AddFacilityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-facility',
  templateUrl: 'add-facility.html',
})
export class AddFacilityPage {

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
  } = { lat: 0, lng: 0, detectedAddress: '' };
  submitted = false;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public facilityData: FacilityData,
    public storage: Storage
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFacilityPage');
    this.storage.get('UID').then((val) => {
      this.facility.ownerUID = val;
      console.log(this.facility.ownerUID);
    });

  }

  createNewFacility(form: NgForm) {
    this.submitted = true;
    console.log(this.facility);
    if (form.valid) {
      // this.authProvider.signup(this.signup.username, this.signup.password, this.signup.name);
      this.facilityData.saveFacility(this.facility).then((result) => {
        // this.navCtrl.pop();
        this.navCtrl.setRoot(TabsPage);
      }, (err) => {
        console.log(err);
      });
    }
  }

  onPostalChange(postalCode) {
    var googleMapsClient = require('@google/maps').createClient({
      key: 'AIzaSyAoD9nOgrj7ADeRao3HsjoFyeqUa8GjEEs',
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
