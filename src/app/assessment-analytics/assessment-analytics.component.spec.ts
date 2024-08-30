import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentAnalyticsComponent } from './assessment-analytics.component';

describe('AssessmentAnalyticsComponent', () => {
  let component: AssessmentAnalyticsComponent;
  let fixture: ComponentFixture<AssessmentAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssessmentAnalyticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
