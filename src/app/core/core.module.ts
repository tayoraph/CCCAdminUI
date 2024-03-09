import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataStoreService } from './store/data.store';
import { initCustomStoreSynchronousFactory } from './store/Store_Initializer';
import { EncryptionService } from './base/utils/encryption';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [

  ],
  exports: [

  ],
  providers:[
    {
      provide: APP_INITIALIZER,
      useFactory: initCustomStoreSynchronousFactory,
      deps: [DataStoreService],
      multi:true
    },
    EncryptionService
  ]
})
export class CoreModule { }
