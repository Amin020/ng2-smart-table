import {Component, ViewChild, OnInit} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { PageEvent } from 'angular-6-datatable';

@Component({
  selector: 'app-angular-mat-tables',
  templateUrl: './angular-mat-tables.component.html',
  styleUrls: ['./angular-mat-tables.component.css']
})
export class AngularMatTablesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any;
  ELEMENT_DATA: any[];
  length;
  pageSize;
  pageSizeOptions: number[];
  pageEvent: PageEvent;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {
  }

  ngOnInit() {
    this.ELEMENT_DATA = [
      [1, 'Hydrogen', 1.0079, 'H'],
      [2, 'O2', 2.0079, 'He'],
      [3, 'H2O', 3.0079, 'Li'],
      [4, 'C2O', 4.0079, 'Fx'],
      [5, 'M2O', 5.0079, 'D'],
      [6, 'K17', 6.0079, 'E'],
      [7, 'C20', 7.0079, 'M']
    ];
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    console.log('Data source: ', this.dataSource);
    this.dataSource.data = this.ELEMENT_DATA;
    this.length = this.ELEMENT_DATA.length;
    this.pageSize = 1;
    this.pageSizeOptions = [1, 2, 3];
    this.dataSource.paginator = this.paginator;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
