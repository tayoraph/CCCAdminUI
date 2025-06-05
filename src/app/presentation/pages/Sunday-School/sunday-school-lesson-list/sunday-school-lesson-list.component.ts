import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { bible } from '../../BibleLessons/IBibleSchema';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SundaySchoolLessonService } from '../SundaySchoolLessons-service';
import { getSscUnitByMonthReqParameters, sundaySchoolLessonRequest, SundaySchoolWeekDetails } from '../sundaySchool.Model';
import { sshWeekDetails, weekDayList, currentDayDate, unitsDetails } from 'src/app/infrastructure/Utils/Constants/constants';

@Component({
  selector: 'app-sunday-school-lesson-list',
  templateUrl: './sunday-school-lesson-list.component.html',
  styleUrls: ['./sunday-school-lesson-list.component.scss']
})
export class SundaySchoolLessonListComponent {
dataSource!: MatTableDataSource<any> ;
  dataSize: number = 0;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumns: string[] = ['Week','Topic', 'Focus', "Notes", 'Date', 'BibleReading','MemoryVerse', 'Action'];
  public listOfLessons = []
  public listOfLessonsFromServer : sundaySchoolLessonRequest[] = []
  public searchItem = "";
  public queryItem:string = ''
  public weekDetails: Array<SundaySchoolWeekDetails> = sshWeekDetails
  public weekDayList = weekDayList
  public currentDayDate = currentDayDate
  public unitsDetails = unitsDetails
   public currentMonth: any="";
   public queryUnit: any="";
   public currentYear = new Date().getFullYear().toString()
  public queryParam:getSscUnitByMonthReqParameters = {
    month: '',
    unit: '',
    year: this.currentYear
  };
  public lessonDetails:any

  /**
   *
   */
  constructor( public router : Router, 
     public alert: ToastrService,
     public _sundaySchoolLessonService : SundaySchoolLessonService ) {
  }

  ngOnInit() { }

 getSundaySchoolLessonForAMonth(){
    let user = this;
      this.queryParam.month= this.currentMonth;
      this.queryParam.unit = this.queryUnit.unitText;
    let resArray :Array<Object> =[]
    this._sundaySchoolLessonService.getSundaySchoolLessonForAMonth(this.queryParam)
    .subscribe({
     next(res:any) {
      //  console.log("sunday lesson list ", res)
       if(res.isSuccessful){
        user.lessonDetails = res.data[0].sundaySchoolLessons;
        if(res.data[0].sundaySchoolLessons == undefined){
          user.alert.info(` Sunday School Lesson is missing for ${user.queryParam.month}.`)
         user.dataSource = new MatTableDataSource(resArray);
         user.dataSource.paginator = user.paginator;}
       else{
        user.listOfLessonsFromServer = res.data[0].sundaySchoolLessons[user.queryParam.year][user.queryParam.unit]['Lesson'][user.queryParam.month];
        let weeks = res.data[0].sundaySchoolLessons[user.queryParam.year][user.queryParam.unit]['Lesson'][user.queryParam.month];
       
        resArray.push(
          {week:'Week 1', value: weeks['Week1']},
          {week:'week 2', value: weeks['week2']},
          {week:'week 3', value: weeks['week3']},
          {week:'week 4', value: weeks['week4']}
         )
        resArray = resArray.filter((ele:any) => ele.value != undefined);
         user.dataSource = new MatTableDataSource(resArray);
         user.dataSource.paginator = user.paginator;
         user.alert.success(res.message);
      //  console.log("listOfLessonsFromServer ", user.listOfLessonsFromServer)

       }
       }
       else
       user.alert.info(res.message);

     },
     error(err:any) {
       user.alert.error('An Error occurred');
       
     },
    }) 
  }


  searchList(searchItem : string){
    if(searchItem == "" || searchItem == undefined)
      return
  
   let result =  this.listOfLessonsFromServer.filter(ele=>{
      return  ele.reqDetails.year.trim().toLowerCase().includes(searchItem.trim().toLowerCase())
            || ele.reqDetails.month.trim().toLowerCase().includes(searchItem.trim().toLowerCase())
            // || (ele.Week.BibleReading.trim().toLowerCase().includes(searchItem.trim().toLowerCase())
            || ele.Week.Focus.trim().toLowerCase().includes(searchItem.trim().toLowerCase())
            || ele.Week.Notes.trim().toLowerCase().includes(searchItem.trim().toLowerCase())
            || (ele.Week.MemoryVerse.trim().toLowerCase().includes(searchItem.trim().toLowerCase())
      )
    })
    this.dataSource = new MatTableDataSource(result);
    this.dataSource.paginator = this.paginator;
  }

  /**
   * @todo Edit lesson
   * @param lesson 
   */
  editLesson(lesson:bible){
    sessionStorage.setItem("lesson", JSON.stringify(lesson));
    // this.router.navigate(['app/lesson/add-new-lesson'])
  }

  /**
   * @todo Delete lesson
   * @param lesson 
   */

  deleteLesson(lesson:any){
   if(window.confirm(`Are you sure you want to delete the Bible lesson for ${lesson.dayOfTheWeek},  ${lesson.day}  ${lesson.month}  ${lesson.year} `) == true)
   {
 let les: sundaySchoolLessonRequest = {
      SubTheme: "",
      Theme: "",
      Week: {
        Topic: lesson.value.Topic,
        Date: lesson.value.Date,
        Duration: lesson.value.Duration,
        BibleReading: lesson.value.BibleReading,
        Focus: lesson.value.Focus,
        Notes: lesson.value.Notes,
        MemoryVerse: lesson.value.MemoryVerse,
        week: lesson.week.replace(' ','')
      },
      reqDetails: {
        month: this.queryParam.month,
        year: this.queryParam.year,
      }, 
      unit: this.queryParam.unit
    }

    let user = this;
    this._sundaySchoolLessonService.deleteLesson(les)
    .subscribe({
      next(value:any) {
        // console.log( value)
        if(value.isSuccessful){
          user.alert.success(value.message);
          user.getSundaySchoolLessonForAMonth();
        }
        else
        user.alert.info(value.message);
      },
      error(err) {
        user.alert.error('An Error occurred');
      },
     }) 
    }else{
      this.alert.info('your delete attempt was cancelled');

    }
  }
  
}

