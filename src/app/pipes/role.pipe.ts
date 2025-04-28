import { Pipe, PipeTransform } from '@angular/core';
import { Roles } from '../enums/roles.enum';

@Pipe({
  name: 'role',
})
export class RolePipe implements PipeTransform {
  transform(role: Roles): string {
    switch (role) {
      case Roles.Admin:
        return 'Администратор';
      case Roles.User:
        return 'Пользователь';
      case Roles.Guest:
        return 'Гость';
      default:
        throw Error('Неправильное значение роли');
    }
  }
}
