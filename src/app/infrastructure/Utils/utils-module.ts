import { NgModule } from "@angular/core";
import { FormValidation } from "./formsValidations/formValidation";
import { LoaderService } from "./Loader/loader.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoadingInterceptor } from "./Loader/loading.interceptor";
import { LoaderComponent } from "./Loader/loader.component";
import { MaterialModule } from "src/app/material.module";
import { CommonModule } from "@angular/common";
import { EncryptionInterceptor } from "./BaseHttp/HttpInterceptor";
import { EncryptionService } from "src/app/core/base/utils/encryption";

@NgModule({

    declarations:[LoaderComponent],
    imports:[CommonModule, MaterialModule],
    providers:[FormValidation,
        LoaderService,
        {
          provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
        },
        {
          provide:HTTP_INTERCEPTORS, useClass:EncryptionInterceptor, multi:true
        },
        EncryptionService
    ],
    exports:[LoaderComponent]
})
export class UtilsModule{}