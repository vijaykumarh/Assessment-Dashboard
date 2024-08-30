import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCreationToolComponent } from './question-creation-tool.component';

describe('QuestionCreationToolComponent', () => {
  let component: QuestionCreationToolComponent;
  let fixture: ComponentFixture<QuestionCreationToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionCreationToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionCreationToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
