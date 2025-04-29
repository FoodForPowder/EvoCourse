export interface NotifyStore {
  isNotify: boolean;
}
export class NotifyUpdate {
  static readonly type = '[Notify]: Notify update';
  constructor(public payload: NotifyStore) {}
}
