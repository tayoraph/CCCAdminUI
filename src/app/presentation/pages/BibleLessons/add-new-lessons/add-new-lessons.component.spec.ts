import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewLessonsComponent } from './add-new-lessons.component';

describe('AddNewLessonsComponent', () => {
  let component: AddNewLessonsComponent;
  let fixture: ComponentFixture<AddNewLessonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewLessonsComponent]
    });
    fixture = TestBed.createComponent(AddNewLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
