import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarErrorComponent } from './snackbar-error.component';

describe('SnackbarErrorComponent', () => {
  let component: SnackbarErrorComponent;
  let fixture: ComponentFixture<SnackbarErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnackbarErrorComponent]
    });
    fixture = TestBed.createComponent(SnackbarErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
