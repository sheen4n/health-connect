import { Component, ViewChild } from '@angular/core';
import { Events, Platform, Nav, MenuController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';

import { AuthProvider } from '../providers/auth/auth';

// import { HomePage } from '../pages/home/home';
import { AccountPage, SupportPage, SignupPage, LoginPage, TabsPage, MapPage, InboxPage, AllFacilitiesPage, FacilityDetailPage, AddFacilityPage, MyFacilitiesPage, EditFacilityPage, ChatPage } from './pages';

import { AngularFireAuth } from 'angularfire2/auth';
import { FacilityData } from '../providers/facility-data';

export interface PageInterface {
  name: string;
  title: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu
  appPages: PageInterface[] = [
    { title: 'View All', name: 'TabsPage', component: TabsPage, tabComponent: AllFacilitiesPage, index: 0, icon: 'home' },
    { title: 'Add New', name: 'TabsPage', component: TabsPage, tabComponent: AddFacilityPage, index: 1, icon: 'create' },
    { title: 'My Facilities', name: 'TabsPage', component: TabsPage, tabComponent: MyFacilitiesPage, index: 2, icon: 'happy' },
    { title: 'Inbox', name: 'InboxPage', component: TabsPage, tabComponent: InboxPage, index: 3, icon: 'mail' }

  ];
  loggedInPages: PageInterface[] = [
    { title: 'Account', name: 'AccountPage', component: AccountPage, icon: 'person' },
    { title: 'Support', name: 'SupportPage', component: SupportPage, icon: 'help' },
    { title: 'Logout', name: 'Logout', component: TabsPage, icon: 'log-out', logsOut: true }
  ];
  loggedOutPages: PageInterface[] = [
    { title: 'Login', name: 'LoginPage', component: LoginPage, icon: 'log-in' },
    { title: 'Signup', name: 'SignupPage', component: SignupPage, icon: 'person-add' }
  ];

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public afAuth: AngularFireAuth,
    public menu: MenuController,
    public events: Events,
    public authProvider: AuthProvider,
    public alertCtrl: AlertController,
    public storage: Storage

  ) {

    afAuth.authState.subscribe(user => {
      this.enableMenu(user !== null);
      if (user) {
        this.rootPage = 'TabsPage';
      } else {
        this.rootPage = 'LoginPage';
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });




  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.enableMenu(true);
      this.nav.setRoot(TabsPage);

    });

    this.events.subscribe('user:signup', () => {
      this.enableMenu(true);
      this.nav.setRoot(TabsPage);
    });

    this.events.subscribe('user:logout', () => {
      this.enableMenu(false);
      this.nav.setRoot(LoginPage);
    });
  }

  enableMenu(loggedIn: boolean) {
    this.menu.enable(loggedIn, 'loggedInMenu');
    this.menu.enable(!loggedIn, 'loggedOutMenu');
  }


  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNavs()[0];

    // Tabs are a special case because they have their own navigation
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }

  getActivePage() {
    if (this.nav.getActive())
      return this.nav.getActive().name;
    else
      return '';
  }

  openPage(page: PageInterface) {
    let params = {};

    // the nav component was found using @ViewChild(Nav)
    // setRoot on the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    if (page.index) {
      params = { tabIndex: page.index };
    }

    // If we are already on tabs just change the selected tab
    // don't setRoot again, this maintains the history stack of the
    // tabs even if changing them from the menu
    if (this.nav.getActiveChildNavs().length && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      // Set the root of the nav with params if it's a tab index
      this.nav.setRoot(page.name, params).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
    }

    if (page.logsOut === true) {
      // Give the menu time to close before changing to logged out
      this.authProvider.logout();
    }
  }
}
