import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/models/post';
import { LikedPostsStoreService } from 'src/app/services/liked-posts-store.service';

@Component({
  selector: 'app-best-posts',
  templateUrl: './best-posts.component.html',
  styleUrls: ['./best-posts.component.css'],
})
export class BestPostsComponent {
  constructor(
    private likedPostsService: LikedPostsStoreService,
    private toastr: ToastrService
  ) {}

  @Input() bestPosts: Post[] = [];
  isMore: number = 0;
  moreButtonClicked() {
    this.isMore = 1;
  }
}
