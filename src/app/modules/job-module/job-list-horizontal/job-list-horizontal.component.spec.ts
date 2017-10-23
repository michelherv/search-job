import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListHorizontalComponent } from './job-list-horizontal.component';

describe('JobListHorizontalComponent', () => {
  let component: JobListHorizontalComponent;
  let fixture: ComponentFixture<JobListHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobListHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
