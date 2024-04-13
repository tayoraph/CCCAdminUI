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
export class DapService extends BaseHttpService {
  private stop$ = new Subject();
  private audioObj = new Audio();
  audioEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
    "canplay",
    "loadedmetadata",
    "loadstart"
  ];
  private state :StreamState = {
    playing: false,
    readableCurrentTime: '',
    readableDuration: '',
    duration: undefined,
    currentTime: undefined,
    canplay: false,
    error: false,
  };

  constructor( public override httpClient?: HttpClient ) {
    super()
     
  }

 
  // getState(): Observable<StreamState> {
  //   return this.stateChange.asObservable();
  // }


  //////////////////////////////////////cloud serveice ///////////////////////////////
  files: any = [
    // tslint:disable-next-line: max-line-length
        { url: 'http://localhost:4000/clients/test.mp3', 
          name: 'Perfect',
          artist: ' Ed Sheeran',
          extension: "mp3",
          type: "audio/mp3"
        },
        {
    // tslint:disable-next-line: max-line-length
          url: 'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
          name: 'Man Atkeya Beparwah',
          artist: 'Nusrat Fateh Ali Khan',
          extension: "mp3",
          type: "audio/mp3"
        },
        { url: 'http://localhost:4000/clients/test.mp3',
          name: 'Penny Lane',
          artist: 'The Beatles',
          extension: "mp3",
          type: "audio/mp3"
        }
      ];
    
      // getFiles() {
      //  return of(this.files);
      // }
      getFiles() {
        let con = environment.baseUrl + environment.getAllDap
        return this.get(con)
       }
}