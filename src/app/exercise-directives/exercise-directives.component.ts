import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-directives',
  templateUrl: './exercise-directives.component.html',
  styles: [`
  .fontC{
    color: white;
  }`]
})
export class ExerciseDirectivesComponent implements OnInit {
ordinal = 0;
ordinals = [];
password = '';
passwords = []

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.password = (Math.random() + 1).toString(36).substring(7);
    this.ordinal ++;
    this.ordinals.push(this.ordinal);
    this.passwords.push(this.password);
  }

}
