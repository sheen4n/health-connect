import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Events } from 'ionic-angular';

import { NgForm } from '@angular/forms';

import {  SignupPage,  TabsPage, MapPage } from '../../app/pages';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // login: {username?: string, password?: string} = {};
  login: { username?: string, password?: string } = { username: "", password: "" };

  submitted = false;
  message: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthProvider,
    public events: Events,
    public alertCtrl: AlertController,
    public storage: Storage
  ) {
    this.message = '';
    this.events.subscribe('user:login_login.ts', (data: any) => {
      this.message = data;
    });
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    // this.selectRole();
  }

  googleLogin(): void {
    this.authProvider.googleLogin();
  }

  facebookLogin(): void {
    this.authProvider.facebookLogin();
  }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.authProvider.login(this.login.username, this.login.password);
      // this.navCtrl.push(TabsPage);
    }

  }

}
