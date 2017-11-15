import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';
import { AuthProvider } from './../../providers/auth/auth';

import { LoginPage, SupportPage } from '../../app/pages';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  username: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public userData: UserData,
    public alertCtrl: AlertController,
    public authProvider: AuthProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
    this.getUsername();
  }

  getUsername() {
    this.authProvider.getUsername().then((username) => {
      this.username = username;
      console.log('user', username);
    });
  }

  changePassword() {
    console.log('Clicked to change password');
  }

  logout() {
    this.authProvider.logout();
    this.navCtrl.setRoot(LoginPage);
  }

  support() {
    this.navCtrl.push(SupportPage);
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }

  changeUsername() {
    let alert = this.alertCtrl.create({
      title: 'Change Username',
      buttons: [
        'Cancel'
      ]
    });
    alert.addInput({
      name: 'username',
      value: this.username,
      placeholder: 'username'
    });
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        this.authProvider.setUsername(data.username);
        this.getUsername();
      }
    });

    alert.present();
  }

}
