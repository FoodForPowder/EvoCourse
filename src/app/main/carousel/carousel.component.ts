import { Component, HostBinding, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';
declare var bootstrap: any;
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  @Input()
  sliderPost: Post[] = [];
  constructor() {}
}
