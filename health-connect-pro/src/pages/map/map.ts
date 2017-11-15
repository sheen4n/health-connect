import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { MapData } from '../../providers/map-data';
import { FacilityData } from '../../providers/facility-data';

import { Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


// import { GoogleMaps, GoogleMap,
//   GoogleMapsEvent, LatLng,
//   CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';

declare var google: any;

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  facilities: any = [];
  markerData: any;
  closestFacility: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public mapData: MapData,
    public platform: Platform,
    public geolocation: Geolocation,
    public facilityData: FacilityData,
    private toastCtrl: ToastController
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');

    console.log("it worked");
    this.loadPage();
    // this.presentMyToast();
  }

  async loadPage() {
    await this.getFacilityList();
    await this.loadMap();
    return;
  }

  loadMap() {

    this.geolocation.getCurrentPosition().then((position) => {
      var infowindow = new google.maps.InfoWindow({
        content: ''
      });

      var marker, i;

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      var bounds = new google.maps.LatLngBounds();
      let mapOptions = {
        center: latLng,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      var markers = [];
      var locationsArray = [];
      var closestFacility = '';

      //First Location - Your Current Location
      locationsArray.push(['Your Current Location', position.coords.latitude, position.coords.longitude, "", ""])

      this.facilities.forEach(function (facility) {
        // markers.push([facility.name, facility.lat, facility.lng])
        locationsArray.push([facility.name, facility.lat, facility.lng, facility.description, facility.openingHours]);
      });

      for (i = 0; i < locationsArray.length; i++) {
        marker = new google.maps.Marker({
          title: locationsArray[i][0],
          position: new google.maps.LatLng(locationsArray[i][1], locationsArray[i][2]),
          map: this.map
        });
        markers.push(marker);


        google.maps.event.addListener(marker, 'click', (function (marker, i) {
          return function () {

            var infoWindowContent = '<div class="info_content"><h6>' + locationsArray[i][0] +'</h6><p>' +
            locationsArray[i][3] + '</p><p>' +
            'Opening Hours:<br/>' + locationsArray[i][4] +
            '</p></div>';
            if (i == 0 ) {infowindow.setContent(locationsArray[i][0])}
            if (i !== 0) {infowindow.setContent(infoWindowContent)};
            infowindow.open(this.map, marker);
          }
        })(marker, i));
      }

      this.markerData = markers;

      for (i = 1; i < markers.length; i++) {
        position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
      }


      google.maps.event.addListenerOnce(this.map, 'tilesloaded', find_closest_marker );

      function find_closest_marker(event) {

        var j;
        var distances = [];
        var closest = -1;
        for (j = 1; j < markers.length; j++) {
          var d = google.maps.geometry.spherical.computeDistanceBetween(markers[j].position, latLng);
          distances[j] = d;
          if (closest == -1 || d < distances[closest]) {
            closest = j;
          }


      }
      closestFacility = markers[closest].getTitle();
      console.log('Closest marker is: ' + markers[closest].getTitle());
      alert('Closest Facility is: ' + markers[closest].getTitle());
    }
      // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
      var boundsListener = google.maps.event.addListener((this.map), 'bounds_changed', function (event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
      });

    }, (err) => {
      console.log(err);
    });


  }

  addMarker() {

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);

  }

  addInfoWindow(marker, content) {

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

  getFacilityList() {
    this.facilityData.getAllFacilities().then((res) => {
      this.facilities = res;
    }, (err) => {
      console.log(err);
    });
  }

}
