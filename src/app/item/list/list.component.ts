import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemSpec } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  itemList: ItemSpec[] | undefined;
  enable: boolean | undefined;
  list: number | undefined;
  constructor(
    private itemService: ItemService,
    private activeRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRouter.parent?.params.subscribe((params) => {
      this.itemList = this.itemService.getItemSpecs(params['id']);
    });
    this.activeRouter.queryParams.subscribe((params) => {
      this.enable = params['enable'];
      this.list = params['list'];
    });
    console.log(this.enable + '' + this.list);
  }
}
