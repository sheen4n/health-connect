import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { NgForm } from '@angular/forms';
import { AuthProvider } from './../../providers/auth/auth';

import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signup: { email?: string, password?: string , name?: string} = { email: "", password: "", name: "" };
  submitted = false;
  message: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public authProvider: AuthProvider) {
    this.message = '';
    this.events.subscribe('user:signup_signup.ts', (data: any) => {
      this.message = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.authProvider.signup(this.signup.email, this.signup.password, this.signup.name);
    }
  }
}
