import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher } from 'ionic-angular';
import { ChatData } from '../../providers/chat-data';

import { AuthProvider } from '../../providers/auth/auth';
import { UserData} from '../../providers/user-data';

import { Storage } from '@ionic/storage';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Http } from '@angular/http';

import { ChatPage } from '../chat/chat';

/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  originalInboxChats: any;
  inboxChats: any;
  myUID: string;
  chatName: string;
  isEmpty: boolean = true;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public chatData: ChatData,
    public authProvider: AuthProvider,
    public userData: UserData,
    public storage: Storage,
    public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');

    this.storage.get('UID').then((val) => {
      this.myUID = val;
    });

    this.authProvider.getUid().then((uid) => {
      this.getInbox(uid);
    });

  }

  getInbox(UID) {
    this.chatData.getInboxByUID(UID).then((res) => {
      this.inboxChats = res;
      this.originalInboxChats = this.inboxChats;
      if (this.originalInboxChats.length == 0) {this.isEmpty = true} else {this.isEmpty = false };

    }, (err) => {
      console.log(err);
    });
  }


  goToChat(chatId) {
    this.navCtrl.push(ChatPage, { chatId: chatId });

  }

  searchInbox(ev) {
    // Reset items back to all of the items
    this.inboxChats = this.originalInboxChats;

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.inboxChats = this.inboxChats.filter((inboxChat) => {
        if (
          inboxChat.proUserName.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          inboxChat.normalUserName.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          inboxChat.message.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          inboxChat.updated_at.toLowerCase().indexOf(val.toLowerCase()) > -1
        )
          return true;
      })
    }
  }

}
