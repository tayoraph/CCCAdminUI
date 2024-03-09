import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { UserRepository } from '../../repository/user.repository';
import { UserModel } from '../Models/IUser';
import { LoginDto } from '../Models/user.model';
export class UserLoginUseCase implements UseCase<LoginDto, UserModel> {
    constructor(private userRepository: UserRepository) { }
    execute(
       params: LoginDto,
    ): Observable<UserModel> {
        return this.userRepository.login(params);
    }
}