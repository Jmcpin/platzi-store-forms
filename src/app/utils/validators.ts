import { AbstractControl } from '@angular/forms';

export class MyValidators {

  static isPriceValid(control: AbstractControl) {
    const value = control.value;
    console.log(value);
    if (value > 10000) {
      return {price_invalid: true};
    }
    return null;
  }

  static validPassword(control: AbstractControl) {
    const value = control.value;
    if (!containsNumber(value)) {
      return {invalidd_password: true};
    }
    return null;
  }

  static matchPasswords(control: AbstractControl) {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;
    if (password !== confirmPassword) {
      return {match_password: true};
    }
    return null;
  }

  static rango(formularioo: AbstractControl){
    const inicio = formularioo.get('inicio').value;
    const fin = formularioo.get('fin').value;
    if((inicio < 0 || inicio > 100) || (fin < 0 || fin > 100)){
      return { error_rangoo: true };
    }
    return null;
  }

}

function containsNumber(value: string){
  //return value.split('').find(v => isNumber(v)) !== undefined; // Devuelve un undefined o un valor si encuentra la coincidencia
  return value.split('').some(v => isNumber(v));// Recomendación ChatGPT, la funcion some devuelve un booleano
}

function isNumber(value: string){
  return !isNaN(parseInt(value, 10));
}
