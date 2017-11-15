import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { NgForm } from '@angular/forms';
import { UserData } from './../../providers/user-data';

import { Storage } from '@ionic/storage';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Http } from '@angular/http';
import {ChatPage} from '../../app/pages';


/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  proUsers : any;
  myUID: string;
  originalProUsers: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public userData: UserData,
    public storage: Storage,
    public http: Http) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
    this.storage.get('UID').then((val) => {
      this.myUID = val;
    });
    this.getUserList();


  }

  getUserList() {
    this.userData.getAllProUsers().then((res) => {
      this.proUsers = res;
      this.originalProUsers = this.proUsers;
    }, (err) => {
      console.log(err);
    });
  }

  goToChat(proUserId){
    var UIDArray = [];
    UIDArray.push(proUserId);
    UIDArray.push(this.myUID);
    UIDArray.sort();
    var chatId = UIDArray.join('-');
    this.navCtrl.push(ChatPage, { chatId: chatId });
  }

  searchProusers(ev) {
    // Reset items back to all of the items
    this.proUsers = this.originalProUsers;

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.proUsers = this.proUsers.filter((proUser) => {
        if (
          proUser.name.toLowerCase().indexOf(val.toLowerCase()) > -1
        )
          return true;
      })
    }
  }
}

