import { initialState } from "src/app/infrastructure/Utils/Store/intialState";
import { DataStoreService } from "./data.store";

export function initCustomStoreSynchronousFactory(dataStore : DataStoreService) {
    return () => {
      console.log('initializing custom store manager');
      return dataStore.initialize(initialState)
    };
  }