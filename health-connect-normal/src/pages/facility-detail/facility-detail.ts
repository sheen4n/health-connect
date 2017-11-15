import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

import { NgForm } from '@angular/forms';
import { FacilityData } from './../../providers/facility-data';
import { FavoriteData } from './../../providers/favorite-data';

import { Storage } from '@ionic/storage';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Http } from '@angular/http';

import {  ChatPage } from '../../app/pages';


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
  isFavorite: boolean;
  facilityId: any;
  facility: {
    lat?: number,
    lng?: number,
    ownerUID?: string,
    publicOrPrivate?: string,
    name?: string,
    address?: string,
    postal?: string,
    facilityType?: string,
    description?: string,
    openingHours?: string,
    peakHours?: string,
    serviceProvided?: string,
    healthCareGroup?: string,
    contactNumber?: string,
    email?: string,
    detectedAddress?: string,
    _id?: string
  } = {
    lat: 0,
      lng: 0,
      ownerUID: '',
      publicOrPrivate: '',
      name: '',
      address: '',
      postal: '',
      facilityType: '',
      description: '',
      openingHours: '',
      peakHours: '',
      serviceProvided: '',
      healthCareGroup: '',
      contactNumber: '',
      email: '',
      detectedAddress: ''
    };
  favoriteObj: {
    lat?: number,
    lng?: number,
    ownerUID?: string,
    publicOrPrivate?: string,
    name?: string,
    address?: string,
    postal?: string,
    facilityType?: string,
    description?: string,
    openingHours?: string,
    peakHours?: string,
    serviceProvided?: string,
    healthCareGroup?: string,
    contactNumber?: string,
    email?: string,
    detectedAddress?: string,
    favoriteUID?: string,
    favoriteUserUID?: string
  } = {
    lat: 0,
      lng: 0,
      ownerUID: '',
      publicOrPrivate: '',
      name: '',
      address: '',
      postal: '',
      facilityType: '',
      description: '',
      openingHours: '',
      peakHours: '',
      serviceProvided: '',
      healthCareGroup: '',
      contactNumber: '',
      email: '',
      detectedAddress: '',
      favoriteUID: '',
      favoriteUserUID: ''
    };
  isOwner: boolean = false;
  userUID: string;
  favoriteUID: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public facilityData: FacilityData,
    public favoriteData: FavoriteData,
    public storage: Storage,
    public toastController: ToastController,
    public alertController: AlertController) {
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
        this.userUID = val;
        if (val == this.facility.ownerUID) { this.isOwner = true; }
        this.favoriteUID = this.userUID + '-' + this.facility._id;
        this.checkIfFavorite();
      });
    }, (err) => {
      console.log(err);
    });
  }

  goToChat(facilityOwnerUID) {
    var UIDArray = [];
    UIDArray.push(facilityOwnerUID);
    UIDArray.push(this.userUID);
    UIDArray.sort();
    var chatId = UIDArray.join('-');
    this.navCtrl.push(ChatPage, { chatId: chatId });
  }

  addToFavorite() {

    this.favoriteObj = this.facility;
    this.favoriteObj.favoriteUID = this.favoriteUID;
    this.favoriteObj.favoriteUserUID = this.userUID;
    this.favoriteData.saveFavorite(this.favoriteObj).then((result) => {
      this.isFavorite = true;
    }, (err) => {
      console.log(err);
    });

  }

  deleteFavorite() {
    this.toggleFollow();
  }

  checkIfFavorite() {
    this.favoriteData.checkIfFavoriteForUser(this.favoriteUID).then((result) => {
      console.log(result, "test");
      if (result == null) { this.isFavorite = false; } else { this.isFavorite = true };
    }, (err) => {
      console.log(err);
    });
  }

  toggleFollow() {
    if (this.isFavorite) {
      let confirm = this.alertController.create({
        title: 'Unfavorite?',
        message: 'Are you sure you want to unfavorite?',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              this.favoriteData.deleteFavorite(this.favoriteUID).then((result) => {
                this.isFavorite = false;
              }, (err) => {
                console.log(err);
              });
              this.isFavorite = false;

              let toast = this.toastController.create({
                message: 'You have unfavorite this facility.',
                duration: 2000,
                position: 'bottom'
              });
              toast.present();
            }
          },
          { text: 'No' }
        ]
      });
      confirm.present();


    } else {
      this.isFavorite = true;
    }
  }

  getBadgeClass(facility) {
    return facility.publicOrPrivate.indexOf('Public') === 0 ? 'primary' : 'danger';
  }
}
