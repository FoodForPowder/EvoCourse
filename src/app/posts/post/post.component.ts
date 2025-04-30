import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { ExtendedPost, Post } from '../../models/post';
import { ToastrService } from 'ngx-toastr';
import { PostComment } from '../../models/comment';
import { LikedPostState } from '../../store/post.state';
import { LikedPostsStoreService } from '../../services/liked-posts-store.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post!: ExtendedPost;
  othersPost: Post[] = [];
  tastePost: Post[] = [];
  checkedItems: string[] = [];
  comment: string = '';
  constructor(
    private router: ActivatedRoute,
    private title: Title,
    private meta: Meta,
    private postsService: PostsService,
    private toastr: ToastrService,
    private likedPostsService: LikedPostsStoreService
  ) {}
  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.postsService.getPostById(id).subscribe({
          next: (post) => {
            this.post = post;
            if (post) {
              this.title.setTitle(post.title);
              this.meta.addTags([
                { name: 'description', content: post.body },
                { name: 'image', content: post.image },
                { name: 'title', content: post.title },
              ]);
            }
            this.toastr.success('Успешно');

            this.postsService.getRandomPosts(3).subscribe({
              next: (data) => {
                this.othersPost = data;
                this.toastr.success('Успешно');
              },
              error: () => {
                this.toastr.error('Попробуйте позже', 'Произошла ошибка');
              },
            });
            this.postsService.getRandomPosts(4).subscribe({
              next: (data) => {
                this.tastePost = data;
                this.toastr.success('Успешно');
              },
              error: () => {
                this.toastr.error('Попробуйте позже', 'Произошла ошибка');
              },
            });
          },
          error: () => {
            this.toastr.error('Попробуйте позже', 'Произошла ошибка');
          },
        });
      }
    });
  }
  printPage() {
    window.print();
  }
  onCheckBtnClick(itemName: string) {
    if (this.checkedItems.includes(itemName)) {
      this.checkedItems = this.checkedItems.filter(
        (value) => value !== itemName
      );
    } else {
      this.checkedItems.push(itemName);
    }
  }
  isItemChecked(ingredient: string) {
    return this.checkedItems.includes(ingredient);
  }
  addComment() {
    this.postsService.addComment(this.post.id, this.comment).subscribe({
      next: () => {
        this.toastr.success('Успешно');
        this.comment = '';
        this.postsService.getPostById(this.post.id).subscribe({
          next: (updatedPost) => {
            this.post = updatedPost;
            this.toastr.success('Успешно');
          },
          error: () => {
            this.toastr.error('Попробуйте позже', 'Произошла ошибка');
          },
        });
      },
      error: () => {
        this.toastr.error('Попробуйте позже', 'Произошла ошибка');
      },
    });
  }
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
