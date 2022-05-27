import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import "leaflet/dist/leaflet.css";

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  public lat: number = 50.5280621;
  public long: number = 5.1362385;
  public map;

  private initMap(): void {
    this.map = L.map('map', {
    center: [this.lat, this.long],
    zoom: 13
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 18,
    });

    tiles.addTo(this.map);
  }

  

  constructor() { }

  ngOnInit(): void {
    this.initMap()
  }


  // public successCallback = (position) => {
  //   // position.coords.latitude = this.lat;
  //   // position.coords.longitude = this.long;
  //   console.log(position.coords.latitude + " " +position.coords.longitude)
  // }
  // public errorCallback = (position) =>{
  //   console.error(position)
  // }

  // public position = navigator.geolocation.getCurrentPosition(this.successCallback , this.errorCallback);
}
