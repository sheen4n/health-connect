import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import firebase from 'firebase/app';

import { Storage } from '@ionic/storage';
import { Events, NavController } from 'ionic-angular';

import {UserData} from '../user-data';


@Injectable()
export class AuthProvider {
  HAS_LOGGED_IN = 'hasLoggedIn';
  public fireAuth: any;
  registerData = {};
  UID = '';

  constructor(
    public afAuth: AngularFireAuth,
    public googlePlus: GooglePlus,
    public facebook: Facebook,
    public storage: Storage,
    public events: Events,
    public userData: UserData
    // public navCtrl: NavController
  ) {
    this.fireAuth = firebase.auth();

  }

  setUsername(username: string): void {
    this.storage.set('username', username);
  };

  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  };

  getUid(): Promise<string> {
    return this.storage.get('UID').then((value) => {
      return value;
    });
  };

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };

  resetPassword(email: string): any {
    return this.fireAuth.sendPasswordResetEmail(email)
      .then(() => {
        //console.log('Reset Password Email Sent.');
        this.events.publish('resetPassword', 'Reset Password Email has been sent Successfully.');
      })
      .catch(() => {
        //console.log('Reset Password Email CANNOT Sent.');
        this.events.publish('resetPassword', 'Cannot send Reset Password Email for now.');
      });
  }

  login(username: string, password: string): void {
    firebase.auth().signInWithEmailAndPassword(username, password)
      // this.afAuth.auth.login({ email: username, password: password })
      .then((auth) => {
        console.log('Log In Successful, UID: ' + auth.uid + ', ' + 'Email: ' + username);
        this.UID = auth.uid;
        this.storage.set('username', username);
        this.storage.set('UID', auth.uid);
        this.storage.set('EMAIL', username);
        this.storage.set('PASSWORD', password);
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:login');
        // this.navCtrl.push(TabsPage);
      }).catch((err) => { console.log(err.message); this.events.publish('user:login_login.ts', err.message); });
  };

  signup(username: string, password: string, name: string): void {
    firebase.auth().createUserWithEmailAndPassword(username, password)
      // this.af.auth.createUser({ email: username, password: password })
      .then((auth) => {
        this.UID = auth.uid;
        this.storage.set('username', username);
        this.storage.set('UID', auth.uid);
        this.storage.set('EMAIL', username);
        this.storage.set('PASSWORD', password);
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:signup');

        this.registerData = {
          "email" : username,
          "uid" : auth.uid,
          "pwd" : password,
          "name" : name
        };

        this.userData.registerUser(this.registerData);

      })
      .catch((err) => { console.log(err.message); this.events.publish('user:signup_signup.ts', err.message); });
  };

  logout(): void {
    // this.af.auth.logout()
    firebase.auth().signOut()
      .then(() => {
        this.UID = '';
        this.storage.set('UID', '');
        this.storage.set('EMAIL', '');
        this.storage.set('PASSWORD', '');
        this.storage.set('role', '');
        console.log('Log Out Successful');
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.events.publish('user:logout');
        //this.navCtrl.setRoot(LoginPage);
      })
      .catch((err) => console.log(err));
  };

  getUser(): firebase.User {
    return this.afAuth.auth.currentUser;
  }

  googleLogin(): Promise<any> {
    return this.googlePlus
      .login({
        webClientId:
          '809778044945-roi5n89efs8k7h96i766i1ev0jfsdmlp.apps.googleusercontent.com',
        offline: true
      })
      .then(res => {
        const credential = firebase.auth.GoogleAuthProvider.credential(
          res.idToken
        );

        this.afAuth.auth
          .signInWithCredential(credential)
          .then(success => {
            console.log('Firebase success: ' + JSON.stringify(success));
            this.storage.set('UID', success.uid);
            this.storage.set(this.HAS_LOGGED_IN, true);
            this.storage.set('EMAIL', success.email);
            this.storage.set('username', success.username);
            this.storage.set('PASSWORD', success.password);
            this.setUsername(success.username);
            this.events.publish('user:login');
          })
          .catch(error => {
            console.log('Firebase failure: ' + JSON.stringify(error));
            this.storage.set('UID', '');
            this.storage.set('EMAIL', '');
            this.storage.set('PASSWORD', '');
            console.log('Log Out Successful');
            this.storage.remove(this.HAS_LOGGED_IN);
            this.storage.remove('username');
            this.events.publish('user:logout');
          }

          );
      })
      .catch(err => console.error('Error: ', err));
  }

  facebookLogin(): Promise<any> {
    return this.facebook
      .login(['email'])
      .then(response => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(
          response.authResponse.accessToken
        );

        this.afAuth.auth
          .signInWithCredential(facebookCredential)
          .then(success => {
            console.log('Firebase success: ' + JSON.stringify(success));
            this.UID = success.uid;
            this.storage.set('UID', success.uid);
            this.storage.set(this.HAS_LOGGED_IN, true);
            this.storage.set('EMAIL', success.email);
            this.storage.set('PASSWORD', success.password);
            this.storage.set('username', success.username);
            this.setUsername(success.username);
            this.events.publish('user:login');
          })
          .catch(error => {
            console.log('Firebase failure: ' + JSON.stringify(error));
            this.storage.set('UID', '');
            this.storage.set('EMAIL', '');
            this.storage.set('PASSWORD', '');
            console.log('Log Out Successful');
            this.storage.remove(this.HAS_LOGGED_IN);
            this.storage.remove('username');
            this.events.publish('user:logout');
          });
      })
      .catch(error => {
        console.log(error);
      });
  }
}
