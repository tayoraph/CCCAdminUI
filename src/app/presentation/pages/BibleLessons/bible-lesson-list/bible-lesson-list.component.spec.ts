import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleLessonListComponent } from './bible-lesson-list.component';

describe('BibleLessonListComponent', () => {
  let component: BibleLessonListComponent;
  let fixture: ComponentFixture<BibleLessonListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BibleLessonListComponent]
    });
    fixture = TestBed.createComponent(BibleLessonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
