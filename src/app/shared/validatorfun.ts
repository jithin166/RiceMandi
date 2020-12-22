import { AbstractControl, ValidatorFn } from "@angular/forms";


export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {forbiddenName: {value: control.value}} : null;
    };
  }


export function nameasnumberValidator(control:AbstractControl):ValidatorFn|Object{
    if(control&&control.value!=null||control.value!=undefined){
        const regex=new RegExp('^([^0-9]*)$');
        const validn=regex.test(control.value);
        return validn? null:{numberValid: {value: control.value}} ;
    }
    return null;
        
}


