import { Injectable } from "@angular/core";
import { DataStoreService } from 'src/app/core/store/data.store';

@Injectable()
export class StoreService {
  constructor(private store: DataStoreService) {}

   isUSerAuthenticated():Promise<any> {
   return new Promise((res, rej) => {
      return this.store.item$(4).subscribe({
        next(value) {
          if (value?.value !== undefined && value?.value !== '') {
            return res (true);
          } else return res(false);
        },
      });
    });
  }
}