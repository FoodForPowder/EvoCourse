import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-taste-block',
  templateUrl: './taste-block.component.html',
  styleUrls: ['./taste-block.component.css'],
})
export class TasteBlockComponent {
  @Input() Posts: Post[] = [];
  @Input() Title = 'Попробуйте эти вкусные рецепты';
}
