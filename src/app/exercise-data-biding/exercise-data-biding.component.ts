import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-data-biding',
  templateUrl: './exercise-data-biding.component.html',
  styleUrls: ['./exercise-data-biding.component.css']
})
export class ExerciseDataBidingComponent implements OnInit {
  username = '';
  btnEnabled = false;

  constructor() { }

  ngOnInit(): void {
  }

  hasUsername() {
    if(this.username.length > 0){
      return this.btnEnabled = true;
    }
  }

  onClean() {
    this.username = '';
  }
}
