import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
import { SupportPage, AccountPage, LoginPage, SignupPage, TabsPage, MapPage, InboxPage, UserPage, AllFacilitiesPage, FacilityDetailPage, ChatPage, FavoritesPage } from './pages';

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

import { GoogleMaps, GoogleMap,
  GoogleMapsEvent, LatLng,
  CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';

  import { Geolocation } from '@ionic-native/geolocation';
import { FavoriteData } from '../providers/favorite-data';


export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
}

@NgModule({
  declarations: [
    MyApp,
    SignupPage,
    TabsPage,
    MapPage,
    LoginPage,
    InboxPage,
    UserPage,
    AllFacilitiesPage,
    FacilityDetailPage,
    ChatPage,
    FavoritesPage,
    AccountPage,
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
        { component: FavoritesPage, name: 'FavoritesPage', segment: 'favorites' },
        { component: AllFacilitiesPage, name: 'AllFacilitiesPage', segment: 'allFacilities' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: UserPage, name: 'UserPage', segment: 'user' },
        { component: FacilityDetailPage, name: 'FacilityDetailPage', segment: 'facilityDetail' },
        { component: ChatPage, name: 'ChatPage', segment: 'chat' }
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
    UserPage,
    AllFacilitiesPage,
    FacilityDetailPage,
    ChatPage,
    FavoritesPage,
    AccountPage,
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
    FavoriteData,
    FacilityData,
    GoogleMaps,
    Geolocation
  ]
})
export class AppModule { }
