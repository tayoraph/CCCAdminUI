import { Routes } from '@angular/router';
import { AddNewLessonsComponent } from './add-new-lessons/add-new-lessons.component';
import { BibleLessonListComponent } from './bible-lesson-list/bible-lesson-list.component';

export const BibleLessonRoutes: Routes = [
  {
    path: 'add-new-lesson',
    component: AddNewLessonsComponent,
    data: {
      title: 'Add New Lesson',
    },
  },
  {
    path: 'bible-lesson-list',
    component: BibleLessonListComponent,
    data: {
      title: 'List of Bible lessons',
    },
  },
];
