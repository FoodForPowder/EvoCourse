import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemService } from '../services/item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  item: Item | undefined;
  isDetailActive = false;
  isListActive = false;
  constructor(
    private itemService: ItemService,
    private activeRouter: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.item = this.itemService.getItemById(
      this.activeRouter.snapshot.params['id']
    );
  }
  getActiveButton(buttonLink: string) {
    if (buttonLink == 'details') {
      this.isDetailActive = true;
      this.isListActive = false;
    } else {
      this.isDetailActive = false;
      this.isListActive = true;
    }
  }
}
