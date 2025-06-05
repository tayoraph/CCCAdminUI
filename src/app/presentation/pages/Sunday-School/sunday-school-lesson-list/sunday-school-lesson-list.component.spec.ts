import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SundaySchoolLessonListComponent } from './sunday-school-lesson-list.component';

describe('SundaySchoolLessonListComponent', () => {
  let component: SundaySchoolLessonListComponent;
  let fixture: ComponentFixture<SundaySchoolLessonListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SundaySchoolLessonListComponent]
    });
    fixture = TestBed.createComponent(SundaySchoolLessonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
