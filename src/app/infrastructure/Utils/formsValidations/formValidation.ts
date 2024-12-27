import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


@Injectable()
export class FormValidation {

    public phoneNumberValidation!: FormGroup
    constructor(public formBuilder: FormBuilder) { }

    PhoneNumberMethod() {
        return this.formBuilder.group({ phoneNumber: new FormControl('', Validators.compose([Validators.required, Validators.minLength(11)],)) });
    }


  /**
     * 
     * @returns Verify bvn 
     */
  Login() {
    return this.formBuilder.group({
        email: new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        password: new FormControl('', Validators.compose([
            Validators.minLength(5),
            Validators.required
          ])),
    });
}

// newLessonForm(){
//     return this.formBuilder.group({
//         currentYear: new FormControl('', Validators.compose([ Validators.required ])),
//         currentMonth: new FormControl('', Validators.compose([ Validators.required])),
//         currentYear: new FormControl('', Validators.compose([ Validators.required ])),
//         currentMonth: new FormControl('', Validators.compose([ Validators.required])),
//         currentYear: new FormControl('', Validators.compose([ Validators.required ])),
//         currentMonth: new FormControl('', Validators.compose([ Validators.required])),
//         currentYear: new FormControl('', Validators.compose([ Validators.required ])),
//         currentMonth: new FormControl('', Validators.compose([ Validators.required])),
//         currentYear: new FormControl('', Validators.compose([ Validators.required ])),
//         currentMonth: new FormControl('', Validators.compose([ Validators.required])),
//         currentYear: new FormControl('', Validators.compose([ Validators.required ])),
//         currentMonth: new FormControl('', Validators.compose([ Validators.required])),
//     });
// }



}
