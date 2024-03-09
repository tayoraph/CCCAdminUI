
import { Mapper } from 'src/app/core/base/utils/mapper';
import { UserModel } from 'src/app/core/domain/Models/IUser';
import { UserEntity } from '../entities/user-entity';
export class UserServiceImplementationMapper extends Mapper<UserEntity, UserModel> {
    mapFrom(param: UserEntity): UserModel {
        let dataMapping : UserModel = param;
        return dataMapping
        // {
        //     id: param.id,
        //     fullName: param.name,
        //     username: param.userName,
        //     phoneNum: param.phoneNumber,
        //     profilePicture: param.userPicture,
        //     activationStatus: param.activationStatus
        // };
    }
    mapTo(param: UserModel): UserEntity {
        let dataMapping : UserEntity = param;
        return dataMapping
    }
    // mapTo(param: UserModel): UserEntity {
    //     return 
    //     {
    //         id: param.id,
    //         name: param.fullName,
    //         userName: param.username,
    //         phoneNumber: param.phoneNum,
    //         userPicture: param.profilePicture,
    //         activationStatus: param.activationStatus
    //     }
   // }
}