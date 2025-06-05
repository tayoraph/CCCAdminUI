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
import { getSscUnitByMonthReqParameters, sundaySchoolLessonRequest } from "./sundaySchool.Model";

@Injectable({
  providedIn: "root"
})
export class SundaySchoolLessonService extends BaseHttpService {

  constructor( public override httpClient?: HttpClient ) {
    super()
     
  }
  /**
   * @todo add new bible lesson data
   * @param value 
   * @returns 
   */
  createNewSundaySchoolLesson(value:sundaySchoolLessonRequest) {
        let con = environment.baseUrl + environment.sundaySchoolLessons.createNewSundaySchoolLesson
        return this.post(con,value)
  }

/**
 * @todo Get bible lesson List
 * @returns 
 */
  getSundaySchoolLessonForAMonth(req:getSscUnitByMonthReqParameters) {
    let con = environment.baseUrl + environment.sundaySchoolLessons.getSundaySchoolLessonForAMonth
    return this.post(con, req)
  }


  deleteLesson(id:string){
    let con = environment.baseUrl + environment.deleteLesson+ id
    return this.delete(con)
  }

  updateLesson(value:any, id:string) {
    // let con = environment.baseUrl + environment.updateBibleLesson + id
    let con = environment.baseUrl + environment.sundaySchoolLessons.createNewSundaySchoolLesson
    return this.put(con,value)
}
}