import { Component, AfterViewInit } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements AfterViewInit {
  ngAfterViewInit() {
    const myCarousel = document.getElementById('receiptCarousel');
    if (myCarousel) {
      new bootstrap.Carousel(myCarousel, {
        interval: 5000, // время между автоматическим переключением
        wrap: true, // зацикливание слайдов
      });
    }
  }
}
