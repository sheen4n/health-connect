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
import { FavoriteData } from '../../providers/favorite-data';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  favorites: any;
  originalFavorites: any;
  UID: string;
  isEmpty: boolean = true;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public facilityData: FacilityData,
    public storage: Storage,
    public http: Http,
    public favoriteData: FavoriteData) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
    this.storage.get('UID').then((val) => {
      this.UID = val;
      this.getFavoriteList(this.UID);
    });


  }

  searchFavorites(ev) {
    // Reset items back to all of the items
    this.favorites = this.originalFavorites;

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.favorites = this.favorites.filter((favorite) => {
        if (
          favorite.name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          favorite.description.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          favorite.address.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          favorite.publicOrPrivate.toLowerCase().indexOf(val.toLowerCase()) > -1
        )
          return true;
      })
    }
  }

  getFavoriteList(UID) {
    this.favoriteData.getFavoritesByUID(UID).then((res) => {
      this.favorites = res;
      this.originalFavorites = this.favorites;
      if (this.favorites.length == 0) {this.isEmpty = true} else {this.isEmpty = false };
    }, (err) => {
      console.log(err);
    });
  }

  goToFacility(favoriteData: any) {
    console.log("clicked");
    this.navCtrl.push(FacilityDetailPage, { facilityId: favoriteData._id, name: favoriteData.name });
  }

  getBadgeClass(favorite) {
    return favorite.publicOrPrivate.indexOf('Public') === 0 ? 'primary' : 'danger';
  }
}

