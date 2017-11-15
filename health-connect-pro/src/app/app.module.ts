import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
import { AccountPage, SupportPage, LoginPage, SignupPage, TabsPage, MapPage, InboxPage, AllFacilitiesPage, FacilityDetailPage, AddFacilityPage, MyFacilitiesPage, EditFacilityPage, ChatPage } from './pages';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AngularFireDatabase } from "angularfire2/database-deprecated";

import { AngularFireAuthModule } from 'angularfire2/auth';

import { AngularFirestoreModule } from 'angularfire2/firestore';

import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import { AuthProvider } from '../providers/auth/auth';

import { IonicStorageModule } from '@ionic/storage';
import { NavController } from 'ionic-angular/navigation/nav-controller';

import {MapData} from '.././providers/map-data';
import {ChatData} from '.././providers/chat-data';
import {UserData} from '.././providers/user-data';

import { HttpModule } from '@angular/http';
import { FacilityData } from '../providers/facility-data';
import { GeocoderProvider } from '../providers/geocoder/geocoder';

import { NativeGeocoder } from '@ionic-native/native-geocoder';

import { GoogleMaps, GoogleMap,
  GoogleMapsEvent, LatLng,
  CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';

  import { Geolocation } from '@ionic-native/geolocation';

export const firebaseConfig = {
  apiKey: "AIzaSyCgHczEUO2Q7zdqBCzZ4yGCPX3tBKQp1PM",
  authDomain: "ionic-frontend-sheen.firebaseapp.com",
  databaseURL: "https://ionic-frontend-sheen.firebaseio.com",
  projectId: "ionic-frontend-sheen",
  storageBucket: "ionic-frontend-sheen.appspot.com",
  messagingSenderId: "498093185822"
}

@NgModule({
  declarations: [
    MyApp,
    SignupPage,
    TabsPage,
    MapPage,
    LoginPage,
    InboxPage,
    AllFacilitiesPage,
    FacilityDetailPage,
    AddFacilityPage,
    MyFacilitiesPage,
    EditFacilityPage,
    ChatPage,
    AccountPage,
    SignupPage,
    SupportPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp , {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' },
        { component: MapPage, name: 'MapPage', segment: 'map' },
        { component: InboxPage, name: 'InboxPage', segment: 'inbox' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: ChatPage, name: 'ChatPage', segment: 'chat' },
        { component: EditFacilityPage, name: 'EditFacilityPage', segment: 'editFacility' },
        { component: MyFacilitiesPage, name: 'MyFacilitiesPage', segment: 'myFacilities' },
        { component: AddFacilityPage, name: 'AddFacilityPage', segment: 'addFacility' },
        { component: FacilityDetailPage, name: 'FacilityDetailPage', segment: 'facilityDetail' },
        { component: AllFacilitiesPage, name: 'AllFacilitiesPage', segment: 'allFacilities' }
      ]
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignupPage,
    TabsPage,
    MapPage,
    LoginPage,
    InboxPage,
    AllFacilitiesPage,
    FacilityDetailPage,
    AddFacilityPage,
    MyFacilitiesPage,
    EditFacilityPage,
    ChatPage,
    AccountPage,
    SignupPage,
    SupportPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    Facebook,
    AngularFireDatabase,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    MapData,
    ChatData,
    UserData,
    FacilityData,
    GeocoderProvider,
    NativeGeocoder,
    Geolocation
  ]
})
export class AppModule { }
