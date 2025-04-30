import { Component, OnInit } from '@angular/core';
import { BestPostsComponent } from '../main/best-posts/best-posts.component';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  constructor(
    private postsService: PostsService,
    private toastr: ToastrService,
    private title: Title
  ) {
    this.title.setTitle('Каталог рецептов');
  }
  ngOnInit(): void {
    this.postsService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        this.toastr.success('Успешно');
      },
      error: () => {
        this.toastr.error('Попробуйте позже', 'Произошла ошибка');
      },
    });
  }
}
