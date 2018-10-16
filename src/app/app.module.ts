import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { DataTableModule } from 'angular-6-datatable';

import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { AngularMatTablesComponent } from './angular-mat-tables/angular-mat-tables.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2SmartTableComponent } from './ng2-smart-table/ng2-smart-table.component';
import { Ng2CompleterModule } from 'ng2-completer';

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    AngularMatTablesComponent,
    Ng2SmartTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    DataTableModule,
    Ng2SmartTableModule,
    Ng2CompleterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
