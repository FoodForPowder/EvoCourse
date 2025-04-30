import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.css'],
})
export class AdminPostsComponent implements OnInit, OnDestroy {
  posts: Post[] = [];

  private subscription$!: Subscription;

  constructor(
    private postsService: PostsService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  loadPosts(): void {
    this.subscription$ = this.postsService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        this.toastr.success('Успешно');
      },
      error: () => {
        this.toastr.error('Попробуйте позже', 'Произошла ошибка');
      },
    });

  }

  deletePost(id: string): void {
    if (
      confirm(
        'Вы действительно хотите удалить этот рецепт? Это действие нельзя отменить.'
      )
    ) {
      const subscription = this.postsService.deletePost(id).subscribe({
        next: () => {
          this.posts = this.posts.filter((post) => post.id !== id);
          this.toastr.success('Успешно');
        },
        error: () => this.toastr.error('Попробуйте позже', 'Произошла ошибка'),
      });

    }
  }

  editPost(id: string): void {
    console.log('Переход к редактированию рецепта с ID:', id);
  }

  truncateText(text: string, maxLength: number = 50): string {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  }
}
