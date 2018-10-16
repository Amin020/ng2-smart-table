import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-htmltables-poc',
  templateUrl: './htmltables-poc.component.html',
  styleUrls: ['./htmltables-poc.component.css']
})
export class HTMLTablesPOCComponent implements OnInit {
  columnHeaders: any[];
  row1: any[];
  row2: any[];
  row3: any[];
  row4: any[];

  constructor() {
    this.columnHeaders = ['Grade', 'lastName', 'GPA', 'Age', 'City', 'Salary'];
    this.row1 = ['A', 'Amin', 3.2, 18, 'Fayoum', 2000];
    this.row2 = ['B', 'Bahaa', 2.4, 19, 'Giza', 3000];
    this.row3 = ['C', 'Camy', 4.0, 20, 'Cairo', 4000];
    this.row4 = ['D', 'Devid', 1.3, 21, 'Tanta', 5000];
  }

  ngOnInit() {
  }

}
