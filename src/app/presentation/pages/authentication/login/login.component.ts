import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { dataStore } from 'src/app/core/domain/Models/dataStore';
import { LoginDto } from 'src/app/core/domain/Models/user.model';
import { UserLoginUseCase } from 'src/app/core/domain/usecases/user-login.usecase';
import { DataStoreService } from 'src/app/core/store/data.store';
import { validationMessages } from 'src/app/infrastructure/Utils/Constants/constants';
import { FormValidation } from 'src/app/infrastructure/Utils/formsValidations/formValidation';
import { ToastrService } from 'ngx-toastr';
import { IDataStore } from 'src/app/core/domain/Interfaces/IdataStore';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {
  public loginForm!: FormGroup;
  public errorMessage = '';
  public validationMessages;
  constructor(public formValidation :FormValidation,public store: DataStoreService,
    public router : Router, private dataStore: DataStoreService,public userLoginUseCase: UserLoginUseCase, public alert: ToastrService) {
    this.validationMessages = validationMessages;
    this.loginForm = this.formValidation.Login();
   
   
   this.loginForm.patchValue({
     email: 'raphael@gmail.com',
     password: 'Password123',
   });
   
    this.dataStore.items$.subscribe({
      next:(res=>{
        console.log(res)
      })
    });
    this.dataStore.item$(1).
    subscribe({
      next:(res=>{
        console.log(res)
      })
    });
  }

  login(value: any) {
    const authData: LoginDto = {
      email: value.email,
      password: value.password
    }
     console.log(authData)
     let user = this
     this.userLoginUseCase.execute(authData)
     .subscribe({
      next(value) {
        let data : IDataStore ={ dataId: 4, dataName : "authToken",value : value }
        user.store.add(data)// pass token to store
        user.alert.success('login successful');
      },
      error(err) {
        user.alert.error('login failed');
        console.log(err)

      },
     })
    
  }

  
}
