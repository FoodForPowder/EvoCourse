import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  post: Post | undefined;
  isEdtit: boolean = false;
  constructor(
    private postService: PostsService,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.params['id'];
    this.postService.getPostById(id).subscribe({
      next: (data) => {
        this.post = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
