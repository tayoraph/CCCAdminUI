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

newSundaySchoolForm(){
    return this.formBuilder.group({
        // SubTheme: new FormControl('', Validators.compose([  ])),
        // Theme: new FormControl('', Validators.compose([ ])),
        Unit: new FormControl('', Validators.compose([Validators.required ])),
        Week: new FormControl('', Validators.compose([ Validators.required ])),
        Month: new FormControl('', Validators.compose([ Validators.required ])),
        Topic: new FormControl('', Validators.compose([ Validators.required])),
        Day: new FormControl('', Validators.compose([ Validators.required ])),
        BibleReadingBook: new FormControl('', Validators.compose([ Validators.required ])),
        BibleReadingChapter: new FormControl('', Validators.compose([ Validators.required ])),
        BibleReadingStartVerse: new FormControl('', Validators.compose([ Validators.required ])),
        BibleReadingEndVerse: new FormControl('', Validators.compose([ Validators.required ])),
        Focus: new FormControl('', Validators.compose([ Validators.required])),
        Notes: new FormControl('', Validators.compose([ Validators.required ])),
        MemoryVerseBook: new FormControl('', Validators.compose([ Validators.required])),
        MemoryVerseChapter: new FormControl('', Validators.compose([ Validators.required])),
        MemoryVerseStartVerse: new FormControl('', Validators.compose([ Validators.required])),
        MemoryVerseEndVerse: new FormControl('', Validators.compose([]))
    });
}



}
