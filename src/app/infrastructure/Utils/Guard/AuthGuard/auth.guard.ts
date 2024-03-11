import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DataStoreService } from 'src/app/core/store/data.store';
import { StoreService } from 'src/app/infrastructure/services/store/store.service';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
 return inject(StoreService).isUSerAuthenticated()
  .then((resp:any)=>{
    if(!resp)router.navigate(['authentication/login'])
    return resp
   });
};

// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class authGuard implements CanActivate {

//   constructor(private router: Router, private storeService : StoreService) {}

//   canActivate(): Promise<boolean> {
//   return this.storeService.isUSerAuthenticated()
//     .then((resp:boolean)=>{
//           return resp
//          });
//   }
// }



