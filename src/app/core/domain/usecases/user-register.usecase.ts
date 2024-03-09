import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { UserRepository } from '../../repository/user.repository';
import { UserModel } from '../Models/IUser';
export class UserRegisterUseCase implements UseCase<{ phoneNum: string; password: string }, UserModel> {
    constructor(private userRepository: UserRepository) { }
    execute(
        params: { phoneNum: string; password: string },
    ): Observable<UserModel> {
        return this.userRepository.register(params);
    }
}