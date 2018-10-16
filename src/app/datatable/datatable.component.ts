import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  columnHeaders: any[];
  dataset: any[];

  constructor() {
    this.columnHeaders = ['Grade', 'Last name', 'GPA', 'Age', 'City', 'Phone number'];
    this.dataset = [
      ['A', 'Amin', 3.2, 18, 'Giza'],
      ['B', 'Mohamed', 3.2, 18, 'Cairo'],
      ['C', 'Amr', 1.2, 20, 'Fayoum'],
      ['D', 'Zyad', 2.2, 29, 'Tanta'],
      ['E', 'Sameh', 2.5, 10, 'Alex'],
      ['F', 'Ouka', 3.3, 22, 'Qalyoub'],
      ['A', 'Amin', 3.2, 18, 'Giza'],
      ['B', 'Mohamed', 3.2, 18, 'Cairo'],
      ['C', 'Amr', 1.2, 20, 'Fayoum'],
      ['D', 'Zyad', 2.2, 29, 'Tanta'],
      ['E', 'Sameh', 2.5, 10, 'Alex'],
      ['F', 'Ouka', 3.3, 22, 'Qalyoub']
    ];
  }

  ngOnInit() {
  }

}
