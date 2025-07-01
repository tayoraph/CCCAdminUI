import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormValidation } from 'src/app/infrastructure/Utils/formsValidations/formValidation';
import { BibleLessonService } from '../../BibleLessons/BibleLesson.service';
import { bible } from '../../BibleLessons/IBibleSchema';
import { bibileBooks, currentDayDate, dayOfTheWeek, sshWeekDetails, typeOfDay, unitsDetails, validationMessages, weekDayList } from 'src/app/infrastructure/Utils/Constants/constants';
import { sundaySchoolLessonRequest, SundaySchoolWeekDetails } from '../sundaySchool.Model';
import { SundaySchoolLessonService } from '../SundaySchoolLessons-service';

@Component({
  selector: 'app-add-new-sunday-school-lesson',
  templateUrl: './add-new-sunday-school-lesson.component.html',
  styleUrls: ['./add-new-sunday-school-lesson.component.scss']
})
export class AddNewSundaySchoolLessonComponent {

  public bibleBooks: Array<string> = bibileBooks

  public currentYear = new Date().getFullYear();
  public currentMonth: any="";
  public newLessonForm : FormGroup;
  public errorMessage = '';
  selectedCriteria: any;
  isUpdateRequest : boolean = false
  isCurrentMonth = false
  updateValue :any = ""
  public bibleReadingArray: Array<string> = []


  public validationMessages;
  public weekDetails: Array<SundaySchoolWeekDetails> = sshWeekDetails
  public weekDayList = weekDayList
  public currentDayDate = currentDayDate
  public duration = '30 minutes'
  public unitsDetails = unitsDetails
  /**
   *
   */
  constructor(public formValidation :FormValidation,
    public router : Router,  public alert: ToastrService, 
    public _sundaySchoolLessonService : SundaySchoolLessonService ) {
    this.validationMessages = validationMessages;
    this.newLessonForm = this.formValidation.newSundaySchoolForm();
  }


  ngOnInit(){
    // this.checkAndSetEditField()
  }
  

  getDateDayName(day:string, month:string, year:string){
    // new Date('05 October 2011 14:48 UTC');
    let dayValue = day.length > 3 ?day.substring(0, 2) : day.substring(0, 1)
     let currentDate = dayValue + " " + month + " " + year;
     // console.log(currentDate)
     let a = new Date(currentDate);
     let weekdays = new Array(7);
     weekdays[0] = "Sunday";
     weekdays[1] = "Monday";
     weekdays[2] = "Tuesday";
     weekdays[3] = "Wednesday";
     weekdays[4] = "Thursday";
     weekdays[5] = "Friday";
     weekdays[6] = "Saturday";
     return  weekdays[a.getDay()];
    
 
   }

  submitBibleReading(){ 
    let bibleReading = `${ this.newLessonForm.get('BibleReadingBook')?.value} ${this.newLessonForm.get('BibleReadingChapter')?.value}:${this.newLessonForm.get('BibleReadingStartVerse')?.value}-${this.newLessonForm.get('BibleReadingEndVerse')?.value}`
   this.bibleReadingArray.push(bibleReading);
  }

  clearBibleReadingInput(){
    this.newLessonForm.patchValue({
      BibleReadingBook: '',
      BibleReadingChapter: '',
      BibleReadingStartVerse: '',
      BibleReadingEndVerse: ''
    })
  }


  removeBibleReadingFromArray(index: number){
    this.bibleReadingArray = this.bibleReadingArray.splice(index, 1);
  }

  mapreq(value:any, typeOfDay:string): sundaySchoolLessonRequest {
    let year = new Date().getFullYear().toString();
    // let typeOfDay = this.getDateDayName(value.Day, value.Month, year);
    // if(typeOfDay !== 'Sunday')
    //   return this.alert.error('The day selected is not a Sunday. Please select a Sunday date.');

    if(this.bibleReadingArray.length == 0 ){
      let bibleReading = `${value.BibleReadingBook} ${value.BibleReadingChapter}:${value.BibleReadingStartVerse}-${value.BibleReadingEndVerse}`
      this.bibleReadingArray.push(bibleReading)
    }
    let memoryVerse = 
      value.MemoryVerseEndVerse !=''?
        `${value.MemoryVerseBook} ${value.MemoryVerseChapter}:${value.MemoryVerseStartVerse}-${value.MemoryVerseEndVerse}`:
      value.MemoryVerseEndVerse != null ?
        `${value.MemoryVerseBook} ${value.MemoryVerseChapter}:${value.MemoryVerseStartVerse}-${value.MemoryVerseEndVerse}`:
        `${value.MemoryVerseBook} ${value.MemoryVerseChapter}:${value.MemoryVerseStartVerse}`;
    let newLesson: sundaySchoolLessonRequest = {
      SubTheme: value.SubTheme,
      Theme: value.Unit.Theme,
      Week: {
        Topic: value.Topic,
        Date: `${typeOfDay}, ${value.Day} ${value.Month} ${this.currentYear}`,
        Duration: this.duration,
        BibleReading: this.bibleReadingArray,
        Focus: value.Focus,
        Notes: value.Notes,
        MemoryVerse: memoryVerse,
        week: value.Week
      },
      reqDetails: {
        month: value.Month,
        year: year,
      }, 
      unit: value.Unit.unitText
    }
    return newLesson;

  }

   addNewLesson(value:any){ 
    let year = new Date().getFullYear().toString();
    let typeOfDay = this.getDateDayName(value.Day, value.Month, year);
    if(typeOfDay !== 'Sunday')
      return this.alert.error('The day selected is not a Sunday. Please select a Sunday date.');

    let req = this.mapreq(value, typeOfDay)
    console.log("value", value)
    console.log("req", req)
    let user = this;

     return this._sundaySchoolLessonService.createNewSundaySchoolLesson(req)
     .subscribe({
      next(value:any) {
        if(value.isSuccessful){
          // console.log("Saving bible lesson result ", value)
          user.alert.success(value.message);
          // user.resetFormFields();
        }
        else
        user.alert.info(value.message);

      },
      error(err: unknown) {
        user.alert.error('An Error Occurred ');
        
      },
     }) 
   }


   /**
    * save updated data to server
    */
//    updateLesson(){
//     let user = this;
//     let newLesson = this.mapData()
//      this._bibleLessonService.updateLesson(newLesson, this.updateValue._id)
//      .subscribe({
//       next(value:any) {
//         if(value.isSuccessful){
//           // console.log("Saving bible lesson result ", value)
//           user.alert.success(value.message);
//           user.resetFormFields();
//           sessionStorage.removeItem('lesson')
//         }
//         else
//         user.alert.info(value.message);

//       },
//       error(err) {
//         user.alert.error('An Error Occurred ');
        
//       },
//      }) 
//    }
 
//  resetFormFields(){
//   this.day = '';
//   this.dayOfTheWeek = '';
//   this.weekOfTheYear = '';
//   this.testament = '';
//   this.fBook = '';
//   this.fStartFrom = '';
//   this.fChapter = '';
//   this.fEndAt = '';
//   this.sBook = '';
//   this.sStartFrom = '';
//   this.sChapter = '';
//   this.sEndAt = '';
//   this.eBook = '';
//   this.eStartFrom = '';
//   this.eChapter = '';
//   this.eEndAt = '';
//   this.oBook = '';
//   this.oStartFrom = '';
//   this.oChapter = '';
//   this.oEndAt = '';
//   this.typeOfTheDay = '';
//   this.currentMonth = '';
//   this.hymnNo = '';

//  }
  
}
