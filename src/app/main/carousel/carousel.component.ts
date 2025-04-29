import { Component,  Input } from '@angular/core';
import { Post } from 'src/app/models/post';

declare var bootstrap: any;
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent  {
  @Input()
  sliderPost: Post[] = [];
  constructor() {}
  
}
