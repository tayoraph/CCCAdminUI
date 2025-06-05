import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSundaySchoolLessonComponent } from './add-new-sunday-school-lesson.component';

describe('AddNewSundaySchoolLessonComponent', () => {
  let component: AddNewSundaySchoolLessonComponent;
  let fixture: ComponentFixture<AddNewSundaySchoolLessonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewSundaySchoolLessonComponent]
    });
    fixture = TestBed.createComponent(AddNewSundaySchoolLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
