import { Component, AfterViewInit, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Meta, Title } from '@angular/platform-browser';
import { Post } from '../models/post';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { NotifyStoreService } from '../services/notify-store.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  sliderPost: Post[] = [];
  bestPosts: Post[] = [];
  testeItPosts: Post[] = [];
  isNotify!: boolean;
  constructor(
    private postService: PostsService,
    private title: Title,
    private toasts: ToastrService,
    private notify: NotifyStoreService,
    private meta: Meta
  ) {
    this.title.setTitle('Foodie: Главная»');
    this.meta.addTag({
      name: 'description',
      content: 'Сборник кулинарных рецептов, для всей семьи',
    });
  }
  ngOnInit(): void {
    this.postService.getPosts(3).subscribe({
      next: (data) => {
        this.toasts.success('Успешно');
        this.sliderPost = data;
      },
      error: () => {
        this.toasts.error('Попробуйте позже', 'Произошла ошибка');
      },
    });
    this.postService.getRandomPosts(6).subscribe({
      next: (data) => {
        this.toasts.success('Успешно');
        this.bestPosts = data;
      },
      error: () => {
        this.toasts.error('Попробуйте позже', 'Произошла ошибка');
      },
    });
    this.postService.getRandomPosts(4).subscribe({
      next: (data) => {
        this.toasts.success('Успешно');
        this.testeItPosts = data;
      },
      error: () => {
        this.toasts.error('Попробуйте позже', 'Произошла ошибка');
      },
    });
    this.notify.isNotify$.subscribe({
      next: (isNotify) => {
        this.isNotify = isNotify;
      },
    });
  }
}
