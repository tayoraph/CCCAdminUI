import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BibleLessonService } from "./BibleLesson.service";
import { RouterModule } from "@angular/router";
import { BibleLessonRoutes } from "./BibleLesson.router.module";

// import { MaterialModule } from "src/app/material.module";
import {  MatIconModule}  from '@angular/material/icon';
import { MatToolbarModule } from "@angular/material/toolbar"; 
import { MatSliderModule } from "@angular/material/slider"; 
import { MatListModule } from "@angular/material/list"; 
import { MatCardModule } from "@angular/material/card"; 
import { MatButtonModule } from "@angular/material/button"; 
import { MaterialModule } from "src/app/material.module";
import { TablerIconsModule } from "angular-tabler-icons";
import * as TablerIcons from 'angular-tabler-icons/icons';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AddNewLessonsComponent } from './add-new-lessons/add-new-lessons.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BibleLessonListComponent } from './bible-lesson-list/bible-lesson-list.component';
const MatModules = [
    MatButtonModule,
    MatListModule,
    // MatSliderModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule
];

@NgModule({
    imports:[CommonModule,
        RouterModule.forChild(BibleLessonRoutes),
        // MatModules
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    ],
    declarations:[
    AddNewLessonsComponent,
    BibleLessonListComponent
  ],
    providers:[BibleLessonService],
    exports:[
        // MatModules,
    MaterialModule
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class BibleLessonModule{}