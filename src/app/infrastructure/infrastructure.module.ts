import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { DataStoreModule } from "./services/store/store.module";
import { UtilsModule } from "./Utils/utils-module";
import { PersistenceModule } from "./persistence/persistence-module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";

@NgModule({
    imports:[CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        UtilsModule, 
        DataStoreModule, 
        PersistenceModule],
    providers:[],
    declarations:[],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class InfrastructureModule{}