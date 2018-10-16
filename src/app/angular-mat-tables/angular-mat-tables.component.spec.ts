import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMatTablesComponent } from './angular-mat-tables.component';

describe('AngularMatTablesComponent', () => {
  let component: AngularMatTablesComponent;
  let fixture: ComponentFixture<AngularMatTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularMatTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMatTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
