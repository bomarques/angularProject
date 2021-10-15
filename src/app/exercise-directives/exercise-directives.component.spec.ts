import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDirectivesComponent } from './exercise-directives.component';

describe('ExerciseDirectivesComponent', () => {
  let component: ExerciseDirectivesComponent;
  let fixture: ComponentFixture<ExerciseDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
