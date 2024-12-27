import { Component } from '@angular/core';
import { bibileBooks, currentDayDate, dayOfTheWeek, typeOfDay, validationMessages, weekDayList } from 'src/app/infrastructure/Utils/Constants/constants';
import { bible } from '../IBibleSchema';
import { FormValidation } from 'src/app/infrastructure/Utils/formsValidations/formValidation';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup } from '@angular/forms';
import { BibleLessonService } from '../BibleLesson.service';

@Component({
  selector: 'app-add-new-lessons',
  templateUrl: './add-new-lessons.component.html',
  styleUrls: ['./add-new-lessons.component.scss']
})
export class AddNewLessonsComponent {
  public id: string="";
  public year: string="";
  public month: string="";
  public day: string="";
  public dayOfTheWeek: string="";
  public weekOfTheYear: string = '1st';
  public testament: string="";
  public firstLesson!: Object;
  public secondLesson: string="";
  public eveningLesson: string="";
  public onlyLesson: string="";
  fBook: string="";
  fStartFrom: string="";
  fChapter: string="";
  fEndAt: string="";
  sBook: string="";
  sStartFrom: string="";
  sChapter: string="";
  sEndAt: string="";
  eBook: string="";
  eStartFrom: string="";
  eChapter: string="";
  eEndAt: string="";
  oBook: string="";
  oStartFrom: string="";
  oChapter: string="";
  oEndAt: string="";
  typeOfTheDay: string="";
  hymnNo: string="";
  Lesson: bible[] = [];
  allBibleLesson: bible[] = [];
  singleBibleLessonById: bible[] = [];

  // public currentYear = new Date().getFullYear();
  public currentYear = "2025";
  public currentMonth: any="";
  public bibileBooks: Array<string> = bibileBooks
  public typeOfDay = typeOfDay;
  public weekDayList = weekDayList
  public currentDayDate = currentDayDate
  public dayOfTheWeekList = dayOfTheWeek
  public newLessonForm!: FormGroup;
  public errorMessage = '';
  selectedCriteria: any;
  isUpdateRequest : boolean = false
  isCurrentMonth = false
  updateValue :any = ""
  // public validationMessages;
  /**
   *
   */
  constructor(public formValidation :FormValidation,
    public router : Router,  public alert: ToastrService, public _bibleLessonService : BibleLessonService ) {
    // this.validationMessages = validationMessages;
    // this.newLessonForm = this.formValidation.newLessonForm();
  }


  ngOnInit(){
    this.checkAndSetEditField()
  }
  
  checkAndSetEditField(){
   this.updateValue = sessionStorage.getItem("lesson")
   if(this.updateValue !== null) this.isUpdateRequest = true;
   this.updateValue = JSON.parse(this.updateValue)
   this.currentMonth = this.updateValue.month
   this.day = this.updateValue.day
   this.dayOfTheWeek = this.updateValue.dayOfTheWeek
   this.typeOfTheDay = this.updateValue.typeOfTheDay
   this.fBook = this.updateValue.fBook
   this.fStartFrom = this.updateValue.fStartFrom
   this.fChapter = this.updateValue.fChapter
   this.fEndAt = this.updateValue.fEndAt
   this.sBook = this.updateValue.sBook
   this.sStartFrom = this.updateValue.sStartFrom
   this.sEndAt = this.updateValue.sEndAt
   this.eBook = this.updateValue.eBook
   this.eStartFrom = this.updateValue.eStartFrom
   this.eChapter = this.updateValue.eChapter
   this.eEndAt = this.updateValue.eEndAt
   this.oBook = this.updateValue.oBook
   this.oStartFrom = this.updateValue.oStartFrom
   this.oChapter = this.updateValue.oChapter
   this.oEndAt = this.updateValue.oEndAt
   this.hymnNo = this.updateValue.hymnNo

  }
  
  getDateDayName(event:any) {
    // new Date('05 October 2011 14:48 UTC');
    let day = this.day.length > 3 ?this.day.substring(0, 2) : this.day.substring(0, 1)
     let currentDate = day + " " + this.currentMonth + " " + this.currentYear;
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
     this.dayOfTheWeek = weekdays[a.getDay()];
     this.getTypeOfDay()
 
   }
 
   // maap type of day with current date
   getTypeOfDay() {
 
     
     switch (this.dayOfTheWeek) {
       case "Wednesday":
         this.typeOfTheDay = "Mercy Day Service"
         break
       case "Sunday":
         this.typeOfTheDay = "Glorious Service"
         break
      
       case "Thursday":
         this.typeOfTheDay = "New Moon Service"
         break
       case "Friday":
         this.typeOfTheDay = "Power Day Service"
         break
 
       default:
         this.typeOfTheDay = ""
     }
   }
 

   mapData(){
    const newLesson = {
      year: this.currentYear.toString(),
      month: this.currentMonth,
      day: this.day,
      dayOfTheWeek: this.dayOfTheWeek,
      weekOfTheYear: this.weekOfTheYear,
      testament: this.testament != undefined ? this.testament : '',
      fBook: this.fBook != undefined ? this.fBook : '',
      fStartFrom: this.fStartFrom != undefined ? this.fStartFrom : '',
      fChapter: this.fChapter != undefined ? this.fChapter : '',
      fEndAt: this.fEndAt != undefined ? this.fEndAt : '',
      sBook: this.sBook != undefined ? this.sBook : '',
      sStartFrom: this.sStartFrom != undefined ? this.sStartFrom : '',
      sChapter: this.sChapter != undefined ? this.sChapter : '',
      sEndAt: this.sEndAt != undefined ? this.sEndAt : '',
      eBook: this.eBook != undefined ? this.eBook : '',
      eStartFrom: this.eStartFrom != undefined ? this.eStartFrom : '',
      eChapter: this.eChapter != undefined ? this.eChapter : '',
      eEndAt: this.eEndAt != undefined ? this.eEndAt : '',
      oBook: this.oBook != undefined ? this.oBook : '',
      oStartFrom: this.oStartFrom != undefined ? this.oStartFrom : '',
      oChapter: this.oChapter != undefined ? this.oChapter : '',
      oEndAt: this.oEndAt != undefined ? this.oEndAt : '',
      typeOfTheDay: this.typeOfTheDay != undefined ? this.typeOfTheDay : '',
      hymnNo: this.hymnNo != undefined ? this.hymnNo : '',
    }
    return newLesson
   }
   addNewLesson() {
    let user = this;
    let newLesson = this.mapData()
     this._bibleLessonService.addNewLesson(newLesson)
     .subscribe({
      next(value:any) {
        if(value.isSuccessful){
          // console.log("Saving bible lesson result ", value)
          user.alert.success(value.message);
          user.resetFormFields();
        }
        else
        user.alert.info(value.message);

      },
      error(err) {
        user.alert.error('An Error Occurred ');
        
      },
     }) 
   }


   /**
    * save updated data to server
    */
   updateLesson(){
    let user = this;
    let newLesson = this.mapData()
     this._bibleLessonService.updateLesson(newLesson, this.updateValue._id)
     .subscribe({
      next(value:any) {
        if(value.isSuccessful){
          // console.log("Saving bible lesson result ", value)
          user.alert.success(value.message);
          user.resetFormFields();
          sessionStorage.removeItem('lesson')
        }
        else
        user.alert.info(value.message);

      },
      error(err) {
        user.alert.error('An Error Occurred ');
        
      },
     }) 
   }
 
 resetFormFields(){
  this.day = '';
  this.dayOfTheWeek = '';
  this.weekOfTheYear = '';
  this.testament = '';
  this.fBook = '';
  this.fStartFrom = '';
  this.fChapter = '';
  this.fEndAt = '';
  this.sBook = '';
  this.sStartFrom = '';
  this.sChapter = '';
  this.sEndAt = '';
  this.eBook = '';
  this.eStartFrom = '';
  this.eChapter = '';
  this.eEndAt = '';
  this.oBook = '';
  this.oStartFrom = '';
  this.oChapter = '';
  this.oEndAt = '';
  this.typeOfTheDay = '';
  this.currentMonth = '';
  this.hymnNo = '';

 }

}
