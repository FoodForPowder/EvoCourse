import { AbstractControl } from '@angular/forms';

export function onlyRusLetterValidator(c: AbstractControl) {
  let ONLYRUSREGEX = /^[а-яА-ЯёЁ\s]+$/;
  return ONLYRUSREGEX.test(c.value)
    ? null
    : {
        onlyRusLetter: true,
      };
}
