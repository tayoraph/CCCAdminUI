import { NgModule } from "@angular/core";
import {  } from "../../../core/store/data.store";
import { dataStore } from "../../../core/domain/Models/dataStore";
import { Observable } from "rxjs";
import { StoreService } from "./store.service";
import { CommonModule } from "@angular/common";

@NgModule({
    imports:[CommonModule],
    providers:[StoreService],
    
})
export class DataStoreModule{};