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


