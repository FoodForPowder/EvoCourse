import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { NotifyStore, NotifyUpdate } from './model/notify.model';

@State<NotifyStore>({
  name: 'Notify',
  defaults: {
    isNotify:true
  }
})
@Injectable()
export class NotifyState {
  @Selector()
  static getNotify(state: NotifyStore) {
    return state.isNotify;
  }

  @Action(NotifyUpdate)
  updatedNotify(ctx: StateContext<NotifyStore>, action: NotifyUpdate) {
    ctx.patchState({...action.payload})
}
}