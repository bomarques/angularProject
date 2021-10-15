import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDataBidingComponent } from './exercise-data-biding.component';

describe('ExerciseDataBidingComponent', () => {
  let component: ExerciseDataBidingComponent;
  let fixture: ComponentFixture<ExerciseDataBidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseDataBidingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseDataBidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
