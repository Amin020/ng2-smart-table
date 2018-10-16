import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HTMLTablesPOCComponent } from './htmltables-poc.component';

describe('HTMLTablesPOCComponent', () => {
  let component: HTMLTablesPOCComponent;
  let fixture: ComponentFixture<HTMLTablesPOCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HTMLTablesPOCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HTMLTablesPOCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
