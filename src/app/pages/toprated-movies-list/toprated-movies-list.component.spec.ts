import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopratedMoviesListComponent } from './toprated-movies-list.component';

describe('TopratedMoviesListComponent', () => {
  let component: TopratedMoviesListComponent;
  let fixture: ComponentFixture<TopratedMoviesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopratedMoviesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopratedMoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
