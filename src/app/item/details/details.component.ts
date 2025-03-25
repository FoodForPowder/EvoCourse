import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemDetails } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  itemDetails: ItemDetails | undefined;
  constructor(
    private activeRouter: ActivatedRoute,
    private itemService: ItemService
  ) {}
  ngOnInit(): void {
    this.activeRouter.parent?.params.subscribe((params) => {
      this.itemDetails = this.itemService.getItemDetails(params['id']);
      console.log(params);
    });
  }
}
