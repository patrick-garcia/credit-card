import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
  setValue(value: string | null, options: any) {
    // console.log('this', this, 'value', value);
    if(!value) {
      super.setValue('', { ...options, emitModelToViewChange: true });
      return;
    }

    if(value.match(/[^0-9|\/]/gi)) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }

    if(value.length > 5) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }

    if(value.length === 2) {
      super.setValue(value + '/', { ...options, emitModelToViewChange: true });
      return;
    }

    // allows user to remove '/' from expiration - see lesson 239 (not working)
    if(value.length === 2 && this.value.length === 3) {
      super.setValue(value, { ...options, emitModelToViewChange: true });
      return;
    }

    super.setValue(value, { ...options, emitModelToViewChange: true })
  }
}
