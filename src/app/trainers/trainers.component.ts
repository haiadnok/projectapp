import { Component, OnInit } from '@angular/core';
import {trainer} from './mock-trainers';``


@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {

  constructor() { }
trainers = trainer;
  ngOnInit() {
  }

}
