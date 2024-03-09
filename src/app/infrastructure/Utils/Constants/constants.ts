import { HttpHeaders } from "@angular/common/http";

export const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
     'Access-Control-Allow-Origin': '*',
        });
        export const validationMessages = {
            email: [
              { type: 'required', message: 'Email is required.' },
              { type: 'pattern', message: 'Enter a valid email.' }
            ],
            password: [
              { type: 'required', message: 'Password is required.' },
              { type: 'minlength', message: 'Password must be at least 5 characters long.' }
            ],
         
        
           };
        
        