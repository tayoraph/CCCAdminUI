import { Component, OnInit, ViewChild } from '@angular/core';
import { productsData } from '../../dashboard/dashboard.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BibleLessonService } from '../BibleLesson.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { bible } from '../IBibleSchema';

@Component({
  selector: 'app-bible-lesson-list',
  templateUrl: './bible-lesson-list.component.html',
  styleUrls: ['./bible-lesson-list.component.scss']
})

export class BibleLessonListComponent implements OnInit {


  dataSource!: MatTableDataSource<any> ;
  dataSize: number = 0;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumns: string[] = ['Day', 'FirstLesson', 'SecondLesson', 'EveningLesson', 'OnlyLesson', 'Action'];
  public listOfLessons = []
  public listOfLessonsFromServer : bible[] = []
  /**
   *
   */
  constructor( public router : Router, 
     public alert: ToastrService,
     public _bibleLessonService : BibleLessonService ) {
  }

  ngOnInit() {
    this.getBibleLessonsList();
  
  }
  getBibleLessonsList(){
    let user = this;
    this._bibleLessonService.getBibleLessonsList()
    .subscribe({
     next(value:any) {
      //  console.log("bible lesson list ", value)
       if(value.isSuccessful){
         user.listOfLessonsFromServer = value.data.result.reverse();
         user.dataSource = new MatTableDataSource(user.listOfLessonsFromServer);
         user.dataSource.paginator = user.paginator;
        //  user.searchList('2025')
         user.alert.success(value.message);
       }
       else
       user.alert.info(value.message);

     },
     error(err) {
       user.alert.error('An Error occurred');
       
     },
    }) 
  }


  searchList(searchItem : string){
    if(searchItem == "" || searchItem == undefined)
      return
  
   let result =  this.listOfLessonsFromServer.filter(ele=>{
      return  (ele.year.toLowerCase() == searchItem.toLowerCase() 
            || ele.month.toLowerCase() == searchItem.toLowerCase() 
            || ele.day.toLowerCase() == searchItem.toLowerCase() 
            || ele.dayOfTheWeek.toLowerCase() == searchItem.toLowerCase() 
            || ele.typeOfTheDay.toLowerCase() == searchItem.toLowerCase() 
            || ele.weekOfTheYear.toLowerCase() == searchItem.toLowerCase() 
      )
    })
    this.dataSource = new MatTableDataSource(result);
    this.dataSource.paginator = this.paginator;
  }

  editLesson(lesson:bible){

  }

  deleteLesson(lesson:bible){
    let user = this;
    this._bibleLessonService.deleteLesson(lesson._id)
    .subscribe({
      next(value:any) {
        // console.log( value)
        if(value.isSuccessful){
          user.alert.success(value.message);
          user.getBibleLessonsList();
          
        }
        else
        user.alert.info(value.message);
 
      },
      error(err) {
        user.alert.error('An Error occurred');
        
      },
     }) 
  }
  
}
