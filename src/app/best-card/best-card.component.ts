import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LikedPostsStoreService } from '../services/liked-posts-store.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-best-card',
  templateUrl: './best-card.component.html',
  styleUrls: ['./best-card.component.css'],
})
export class BestCardComponent {
  constructor(
    private likedPostsService: LikedPostsStoreService,
    private toastr: ToastrService
  ) {}

  @Input() post!: Post;
  @Input() isWhite = false;
  isLiked(id: string) {
    return this.likedPostsService.checkPost(id);
  }
  updaePost(id: string) {
    let liked = false;
    this.isLiked(id).subscribe((isLiked) => {
      liked = isLiked;
    });
    this.likedPostsService.updateLikedPosts(id);
    if (liked) {
      this.toastr.success(
        'Сохранили этот рецепт для вас',
        'Добавлено в избранное',
        {
          positionClass: 'toast-top-right',
        }
      );
    }
  }
}
