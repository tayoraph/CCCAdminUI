import { Routes } from '@angular/router';
import { AddNewSundaySchoolLessonComponent } from './add-new-sunday-school-lesson/add-new-sunday-school-lesson.component';
import { SundaySchoolLessonListComponent } from './sunday-school-lesson-list/sunday-school-lesson-list.component';

export const SundaySchoolRoutes: Routes = [
   {
     path: 'sunday-school-lesson-list',
     component: SundaySchoolLessonListComponent,
     data: {
       title: 'Add New Lesson',
     },
   },
   {
     path: 'add-new-sunday-school-lesson',
     component: AddNewSundaySchoolLessonComponent,
     data: {
       title: 'List of Bible lessons',
     },
   },
];
