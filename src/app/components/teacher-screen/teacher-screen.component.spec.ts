import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherScreenComponent } from './teacher-screen.component';

describe('TeacherScreenComponent', () => {
  let component: TeacherScreenComponent;
  let fixture: ComponentFixture<TeacherScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherScreenComponent]
    });
    fixture = TestBed.createComponent(TeacherScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
