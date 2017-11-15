import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { Storage } from '@ionic/storage';
import * as io from "socket.io-client";


import { ChatData } from '../../providers/chat-data';
import { UserData } from '../../providers/user-data';


/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  @ViewChild(Content) content: Content;

  chatId: any;
  opposingUser: { name?: string, uid?: string } = { name: '', uid: '' };
  senderUser: { name?: string, uid?: string } = { name: '', uid: '' };
  opposingUserName: String;
  senderUserName: String;
  chats: any;
  senderUID;
  receiverUID: any;
  submitted = false;
  msgData: {
    chatId?: String,
    senderUID?: String,
    receiverUID?: String,
    senderName?: String,
    proUserName?: String,
    normalUserName?: String,
    message?: String
  } = { message: '' };

  socket = io('https://websocket-io-sheen.herokuapp.com/');

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public chatData: ChatData,
    public userData: UserData) {

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    this.chatId = this.navParams.data.chatId;

    this.storage.get('UID').then((val) => {
      this.senderUID = val;
      this.getUserForSender(this.senderUID);
      this.receiverUID = this.getOpposingUIDForChat(this.chatId);
      this.getUserForOpposing(this.receiverUID);
    });
    this.getChatByChatId(this.chatId);

    this.socket.on('new-message', function (data) {
      console.log(data.message, "test3");
      if (data.message.chatId === this.chatId) {
        this.chats.push(data.message);
        console.log(data, data.message, "test2");
      }
    }.bind(this));
  }

  getOpposingUIDForChat(chatId) {
    var opposingUID;
    opposingUID = chatId.replace(this.senderUID, "");
    opposingUID = opposingUID.replace("-", "");
    return opposingUID;
  }

  ionViewWillEnter() {
    this.content.resize();
  }

  ionViewDidEnter() {
    this.content.scrollToBottom();
  }

  getChatByChatId(chatId) {
    this.chatData.getChatByChatId(chatId).then((res) => {
      this.chats = res;
    }, (err) => {
      console.log(err);
    });
  }

  getUserForOpposing(receiverUID) {
    this.userData.getProUserByUID(receiverUID).then((res) => {
      this.opposingUser = res;
      this.opposingUserName = this.opposingUser.name
    }, (err) => {
      console.log(err);
    });
  }

  getUserForSender(senderUID) {
    this.userData.getNormalUserByUID(senderUID).then((res) => {
      this.senderUser = res;
      this.senderUserName = this.senderUser.name;
    }, (err) => {
      console.log(err);
    });
  }

  sendMessage(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      var message = this.msgData.message;
      this.msgData = {
        chatId: this.chatId,
        senderUID: this.senderUID,
        receiverUID: this.receiverUID,
        senderName: this.senderUserName,
        proUserName: this.opposingUserName,
        normalUserName: this.senderUserName,
        message: message
      }
      this.chatData.saveChat(this.msgData).then((result) => {
        this.socket.emit('save-message', result);
        this.msgData.message = '';
        this.submitted = false;
        // this.navCtrl.pop();
        // this.navCtrl.push(ChatPage, { chatId: this.chatId });
      }, (err) => {
        console.log(err);
      });
    }
  }
}
