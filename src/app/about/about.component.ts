import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  image : string = 'assets/download.png';
imagepath :string ='assets/career.jpg';

  ngOnInit() {
  }

}
