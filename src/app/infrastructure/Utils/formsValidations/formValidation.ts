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

    /**
     * 
     * @returns Verify bvn 
     */
    VerifyBVN() {
        return this.formBuilder.group({
            BVN: new FormControl('', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])),
           DOB: new FormControl(null),
        });
    }

        /**
     * 
     * @returns Verify bvn 
     */
        VerifyOTP() {
            return this.formBuilder.group({
                input1: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(1)])),
                input2: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(1)])),
                input3: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(1)])),
                input4: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(1)])),
                input5: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(1)])),
                input6: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(1)])),
            });
        }
    

    /**
     * returns Step by step form 
     */

    stepThree() {
        return this.formBuilder.group({ 
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            title: new FormControl('', Validators.compose([])),
            maritalStatus: new FormControl('',  Validators.compose([])),
            name: new FormControl('', Validators.compose([])),
            mothersMaidenName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
           
        });
    }
   

}
