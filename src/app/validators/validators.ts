import { AbstractControl } from '@angular/forms';

export function onlyRusLetterValidator(c: AbstractControl) {
  const ONLYRUSREGEX = /^[а-яА-ЯёЁ]+$/;
  return ONLYRUSREGEX.test(c.value)
    ? null
    : {
        onlyRusLetter: true,
      };
}
