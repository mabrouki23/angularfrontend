import { AbstractControl, ValidatorFn } from "@angular/forms";
import * as moment from "moment";

export class CustomeDateValidators {
  
  static fromToDate(fromDateField: string, toDateField: string): ValidatorFn {
    return (formGroup: AbstractControl): { [key: string]: boolean } | null => {
        const fromDate = formGroup.get(fromDateField)!.value;
        const toDate = formGroup.get(toDateField)!.value;
       // Ausing the fromDate and toDate are numbers. In not convert them first after null check
        if ((fromDate !== null && toDate !== null) && moment(fromDate).isAfter(toDate)) {       
         
          formGroup.get(fromDateField)?.setErrors({ errorDate: true });
          formGroup.get(toDateField)?.setErrors({ errorDate: true });
           return {errorDate: true};

        }
        return null;
    };
}
}
