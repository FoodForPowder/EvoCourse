import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { NotifyUpdate } from '../store/model/notify.model';
import { NotifyState } from '../store/notify.state';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotifyStoreService {
  @Select(NotifyState.getNotify) isNotify$!: Observable<boolean>;
  constructor(private store: Store) {}
  updateNotify(isNotify: boolean) {
    this.store.dispatch(
      new NotifyUpdate({
        isNotify: isNotify,
      })
    );
  }
}
