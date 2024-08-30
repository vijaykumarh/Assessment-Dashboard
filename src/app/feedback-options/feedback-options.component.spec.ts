import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackOptionsComponent } from './feedback-options.component';

describe('FeedbackOptionsComponent', () => {
  let component: FeedbackOptionsComponent;
  let fixture: ComponentFixture<FeedbackOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbackOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
