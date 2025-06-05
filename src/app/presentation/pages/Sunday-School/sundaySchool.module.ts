import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { SundaySchoolRoutes } from "./sunday-School-lesson.router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TablerIconsModule } from "angular-tabler-icons";
import { NgApexchartsModule } from "ng-apexcharts";
import { MaterialModule } from "src/app/material.module";
import { AddNewSundaySchoolLessonComponent } from "./add-new-sunday-school-lesson/add-new-sunday-school-lesson.component";
import { SundaySchoolLessonListComponent } from "./sunday-school-lesson-list/sunday-school-lesson-list.component";
import * as TablerIcons from 'angular-tabler-icons/icons';
import { SundaySchoolLessonService } from "./SundaySchoolLessons-service";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    RouterModule.forChild(SundaySchoolRoutes),
    TablerIconsModule.pick(TablerIcons),
    
  ],
  exports: [TablerIconsModule],
  providers: [SundaySchoolLessonService],
  declarations: [
    AddNewSundaySchoolLessonComponent,
    SundaySchoolLessonListComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SundaySchoolModule {}