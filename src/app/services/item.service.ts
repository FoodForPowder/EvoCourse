import { Injectable } from '@angular/core';
import { Item, ItemDetails, ItemSpec } from '../models/item.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private items: Item[] = [
    { id: 1, name: 'Товар 1', description: 'Описание товара 1', price: 2990 },
    { id: 2, name: 'Товар 2', description: 'Описание товара 2', price: 1450 },
    { id: 3, name: 'Товар 3', description: 'Описание товара 3', price: 3200 },
    { id: 4, name: 'Товар 4', description: 'Описание товара 4', price: 990 },
    { id: 5, name: 'Товар 5', description: 'Описание товара 5', price: 5750 },
    { id: 6, name: 'Товар 6', description: 'Описание товара 6', price: 2343 },
  ];

  public getItems(): Item[] {
    return this.items;
  }
  public getItemById(id: number): Item | undefined {
    return this.items.find((item) => item.id == id);
  }
  public getItemDetails(id: number): ItemDetails {
    return {
      id,    
      fullDescription: `Подробное описание товара ${id}. `,
      specifications: [
        { name: 'Размер', value: 'Средний' },
        { name: 'Цвет', value: 'Синий' },
        { name: 'Материал', value: 'Высококачественный пластик' },
        { name: 'Вес', value: '500 г' },
      ],
    };
  }
  public getItemSpecs(id: number): ItemSpec[] {
    return [
      { id: 1, name: 'Характеристика 1', value: 'Значение 1' },
      { id: 2, name: 'Характеристика 2', value: 'Значение 2' },
      { id: 3, name: 'Характеристика 3', value: 'Значение 3' },
      { id: 4, name: 'Характеристика 4', value: 'Значение 4' },
      { id: 5, name: 'Характеристика 5', value: 'Значение 5' },
      { id: 6, name: 'Характеристика 6', value: 'Значение 6' },
    ];
  }
}
