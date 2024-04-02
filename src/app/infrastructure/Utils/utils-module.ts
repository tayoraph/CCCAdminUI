import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormValidation } from "./formsValidations/formValidation";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { MaterialModule } from "src/app/material.module";
import { CommonModule } from "@angular/common";
import { EncryptionInterceptor } from "./BaseHttp/HttpInterceptor";
import { EncryptionService } from "src/app/core/base/utils/encryption";

@NgModule({

    declarations:[],
    imports:[CommonModule, MaterialModule],
    providers:[FormValidation,
        {
          provide:HTTP_INTERCEPTORS, useClass:EncryptionInterceptor, multi:true
        },
        EncryptionService
    ],
    exports:[],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class UtilsModule{}