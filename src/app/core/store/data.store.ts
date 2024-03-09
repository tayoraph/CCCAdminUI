import { Injectable } from "@angular/core";
import { Store } from "./store";
import { dataStore } from "../domain/Models/dataStore";
import { IDataStore } from "../domain/Interfaces/IdataStore";

@Injectable({
  providedIn:"root"
})
export class DataStoreService {

  store = new Store<IDataStore[]>([]);

  items$ = this.store.select(data => data);

  item$ = (dataId: number) =>
    this.store.select(data => data.find(data => dataStore.dataId === dataId) as IDataStore);

  initialize(initialItems: IDataStore[]): void {
    this.store.update(_ => initialItems);
  }

  remove(id: number): void {
    this.store.update(state => state.filter(item => dataStore.dataId !== id));
  }

  add(item: IDataStore): void {
    this.store.update(state =>{ 
      console.log(state)
      return [...state, item]})
  }
}