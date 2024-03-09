import { Observable } from 'rxjs';
import { UserModel } from '../domain/Models/IUser';
import { BaseHttpService } from 'src/app/infrastructure/Utils/BaseHttp/base-http.service';
import { LoginDto } from '../domain/Models/user.model';
export abstract class UserRepository extends BaseHttpService{
    abstract login(params: LoginDto): Observable<UserModel>;
    abstract register(params: {phoneNum: string, password: string}): Observable<UserModel>;
    abstract getUserProfile(): Observable<UserModel>;
}