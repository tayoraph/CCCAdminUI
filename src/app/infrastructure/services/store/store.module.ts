import { NgModule } from "@angular/core";
import { DataStore } from "../../../core/store/data.store";
import { dataStore } from "../../../core/domain/Models/dataStore";
import { Observable } from "rxjs";
import { DataStoreService } from "./store.service";
import { CommonModule } from "@angular/common";

@NgModule({
    imports:[CommonModule],
    providers:[DataStoreService],
    
})
export class DataStoreModule{};