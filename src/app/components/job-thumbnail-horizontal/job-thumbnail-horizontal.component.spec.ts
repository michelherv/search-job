import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobThumbnailHorizontalComponent } from './job-thumbnail-horizontal.component';

describe('JobThumbnailHorizontalComponent', () => {
  let component: JobThumbnailHorizontalComponent;
  let fixture: ComponentFixture<JobThumbnailHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobThumbnailHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobThumbnailHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
