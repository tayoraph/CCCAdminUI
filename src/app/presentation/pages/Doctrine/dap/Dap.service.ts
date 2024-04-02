// src/app/services/audio.service.ts
import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, Subject, of, pipe } from "rxjs";
import { takeUntil } from "rxjs/operators";
import * as moment from "moment";
import { StreamState } from "src/app/core/domain/Interfaces/IStream.state";

@Injectable({
  providedIn: "root"
})
export class DapService {
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
  };;

  private streamObservable(url:string) {
    return new Observable(observer => {
      // Play audio
      this.audioObj.src = url;
      this.audioObj.load();
      this.audioObj.play();

      const handler = (event: Event) => {
        observer.next(event);
      };

      this.addEvents(this.audioObj, this.audioEvents, handler);
      return () => {
        // Stop Playing
        this.audioObj.pause();
        this.audioObj.currentTime = 0;
        // remove event listeners
        this.removeEvents(this.audioObj, this.audioEvents, handler);
      };
    });
  }

  private addEvents(obj:any, events:any, handler:any) {
    events.forEach((event:any) => {
      obj.addEventListener(event, handler);
    });
  }

  private removeEvents(obj:any, events:any, handler:any) {
    events.forEach((event:any) => {
      obj.removeEventListener(event, handler);
    });
  }
  playStream(url:string) {
    return this.streamObservable(url).pipe(takeUntil(this.stop$));
  }

  play() {
    this.audioObj.play();
  }

  pause() {
    this.audioObj.pause();
  }

  stop() {
    this.stop$.next("");
  }

  seekTo(seconds:any) {
    this.audioObj.currentTime = seconds;
  }

  formatTime(time: number, format: string = 'HH:mm:ss') {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }

  private stateChange: BehaviorSubject<StreamState> = new BehaviorSubject(this.state);


  private updateStateEvents(event: Event): void {
    switch (event.type) {
      case "canplay":
        this.state.duration = this.audioObj.duration;
        this.state.readableDuration = this.formatTime(this.state.duration);
        this.state.canplay = true;
        break;
      case "playing":
        this.state.playing = true;
        break;
      case "pause":
        this.state.playing = false;
        break;
      case "timeupdate":
        this.state.currentTime = this.audioObj.currentTime;
        this.state.readableCurrentTime = this.formatTime(
          this.state.currentTime
        );
        break;
      case "error":
        this.resetState();
        this.state.error = true;
        break;
    }
    this.stateChange.next(this.state);
  }


// src/app/services/audio.service.ts
private resetState() {
    this.state = {
      playing: false,
      readableCurrentTime: '',
      readableDuration: '',
      duration: undefined,
      currentTime: undefined,
      canplay: false,
      error: false
    };
  }

  getState(): Observable<StreamState> {
    return this.stateChange.asObservable();
  }


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
    
      getFiles() {
       return of(this.files);
      }
}