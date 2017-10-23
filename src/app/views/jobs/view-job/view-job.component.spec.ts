import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJobComponent } from './view-job.component';

describe('ViewJob.TsComponent', () => {
  let component: ViewJobComponent;
  let fixture: ComponentFixture<ViewJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
