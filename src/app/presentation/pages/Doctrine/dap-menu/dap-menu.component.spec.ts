import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DapMenuComponent } from './dap-menu.component';

describe('DapMenuComponent', () => {
  let component: DapMenuComponent;
  let fixture: ComponentFixture<DapMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DapMenuComponent]
    });
    fixture = TestBed.createComponent(DapMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
