import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {

  constructor() { }

  show: boolean = false

  sortItem: Array<string> = ['Low to High', 'High to Low']

  selectSort : string = ""

  toggleShow(){
    this.show = !this.show
  }

  ngOnInit(): void {
  }

}
