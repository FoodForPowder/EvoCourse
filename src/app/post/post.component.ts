import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  post: any;
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data) => {
      this.post = data;
    });
  }
}
