import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inline',
  templateUrl: './inline.component.html',
  styleUrls: ['./inline.component.css'],
})
export class InlineComponent {
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Open Graph Page');
    const tag = this.meta.getTag("name='og:desc'");
    if (tag) {
      this.meta.removeTagElement(tag);
    }
    this.meta.addTags([
      { name: 'og:title', content: 'The Rock' },
      { name: 'og:type', content: 'video.movie' },
      { name: 'og:url', content: '//www.imdb.com/title/tt0117500/' },
    ]);
  }
}
