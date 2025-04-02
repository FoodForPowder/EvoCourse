import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';
import { fromLonLat } from 'ol/proj';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'EvoCourse';
  map!: Map;
  count = 0;
  constructor(private toastr: ToastrService) {}
  ngOnInit(): void {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([37.540441, 55.748045]),
        zoom: 19,
      }),
    });
  }

  showSuccess() {
    this.toastr.success(`Это ваше ${++this.count} нажатие!`, 'Кнопка нажата!');
  }
}
