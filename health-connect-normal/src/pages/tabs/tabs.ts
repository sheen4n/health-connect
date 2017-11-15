import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MapPage, InboxPage, AllFacilitiesPage, FavoritesPage } from '../../app/pages';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = AllFacilitiesPage;
  tab2Root: any = FavoritesPage;
  tab3Root: any = MapPage;
  tab4Root: any = InboxPage;
  mySelectedIndex: number;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

  tabChanged(ev){
    console.log(ev, this.mySelectedIndex);
  }


}
