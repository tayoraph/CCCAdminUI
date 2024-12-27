// src/app/services/audio.service.ts
import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, Subject, of, pipe } from "rxjs";
import { takeUntil } from "rxjs/operators";
import * as moment from "moment";
import { StreamState } from "src/app/core/domain/Interfaces/IStream.state";
import { BaseHttpService } from "src/app/infrastructure/Utils/BaseHttp/base-http.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { dapDTO } from "src/app/core/domain/Models/dapDTO";

@Injectable({
  providedIn: "root"
})
export class BibleLessonService extends BaseHttpService {

  constructor( public override httpClient?: HttpClient ) {
    super()
     
  }
  /**
   * @todo add new bible lesson data
   * @param value 
   * @returns 
   */
  addNewUser(value:any) {
        let con = environment.baseUrl + environment.createBibleLesson
        return this.post(con,value)
  }

/**
 * @todo Get bible lesson List
 * @returns 
 */
  getBibleLessonsList() {
    let con = environment.baseUrl + environment.getBibleLessonsList
    return this.get(con)
  }


  deleteLesson(id:string){
    let con = environment.baseUrl + environment.deleteLesson+ id
    return this.delete(con)
  }
}