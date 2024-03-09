import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  UserServiceImplementationMapper } from '../../persistence/repositories/user/mappers/user-repository.mapper';
import { UserModel } from 'src/app/core/domain/Models/IUser';
import { UserRepository } from 'src/app/core/repository/user.repository';
import { UserEntity } from '../../persistence/repositories/user/entities/user-entity';
import { environment } from 'src/environments/environment';
import { BaseHttpService } from '../../Utils/BaseHttp/base-http.service';
import { LoginDto } from 'src/app/core/domain/Models/user.model';
@Injectable({
    providedIn: 'root',
})
export class UserService extends UserRepository {
    userMapper = new UserServiceImplementationMapper();
    constructor(public override httpClient?: HttpClient,) {
        super();
    }
    login(params: LoginDto): Observable<UserModel> {
    let con = environment.baseUrl + environment.authentication.login;
        
        return this.post<UserEntity>(con, {params})
                   .pipe(map(this.userMapper.mapFrom));
    }
    register(params: {phoneNum: string, password: string}): Observable<UserModel> {
       return this.post<UserEntity>('https://example.com/register', {params})
            .pipe(map(this.userMapper.mapFrom));
    }
    getUserProfile(): Observable<UserModel>{
        return this.get<UserEntity>('https://example.com/user').pipe(
            map(this.userMapper.mapFrom));
    }
}