import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { UserModel } from '../Models/IUser';
import { UserRepository } from '../../repository/user.repository';
export class GetUserProfileUseCase implements UseCase<void, UserModel> {
    constructor(private userRepository: UserRepository) { }
    execute(): Observable<UserModel> {
        return this.userRepository.getUserProfile();
    }
}