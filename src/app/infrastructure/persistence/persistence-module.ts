import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GetUserProfileUseCase } from 'src/app/core/domain/usecases/get-user-profile.usecase';
import { UserLoginUseCase } from 'src/app/core/domain/usecases/user-login.usecase';
import { UserRegisterUseCase } from 'src/app/core/domain/usecases/user-register.usecase';
import { UserRepository } from 'src/app/core/repository/user.repository';
import { UserService } from '../services/user/user.service';


const userLoginUseCaseFactory = 
(userRepo: UserRepository) => new UserLoginUseCase(userRepo);
export const userLoginUseCaseProvider = {
    provide: UserLoginUseCase,
    useFactory: userLoginUseCaseFactory,
    deps: [UserRepository],
};
const userRegisterUseCaseFactory = 
(userRepo: UserRepository) => new UserRegisterUseCase(userRepo);
export const userRegisterUseCaseProvider = {
    provide: UserRegisterUseCase,
    useFactory: userRegisterUseCaseFactory,
    deps: [UserRepository],
};
const getUserProfileUseCaseFactory = 
(userRepo: UserRepository) => new GetUserProfileUseCase(userRepo);
export const getUserProfileUseCaseProvider = {
    provide: GetUserProfileUseCase,
    useFactory: getUserProfileUseCaseFactory,
    deps: [UserRepository],
};
@NgModule({
    providers: [
        userLoginUseCaseProvider,
        userRegisterUseCaseProvider,
        getUserProfileUseCaseProvider,
        { provide: UserRepository, useClass: UserService },
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
})
export class PersistenceModule { }