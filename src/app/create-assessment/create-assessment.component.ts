import { Component } from '@angular/core';
import { AssessmentService } from '../assessment.service';

@Component({
  selector: 'app-create-assessment',
  templateUrl: './create-assessment.component.html',
  styleUrls: ['./create-assessment.component.css']
})
export class CreateAssessmentComponent {
  assessment = {
    id: null,
    title: '',
    type: 'quiz',
    questions: [],
    grading: { automatic: false, manual: true },
    instructions: '',
    timeLimit: null,
    attempts: 1,
    feedback: { type: 'immediate', delayTime: 0 },
    courseContent: '',
    status: ''
  };

  constructor(private assessmentService: AssessmentService) {}

  accessQuestionBank() {
    // Logic to access question bank
  }

  createNewQuestion() {
    // Logic to create a new question
  }

  previewAssessment() {
    // Logic to preview the assessment
  }

  saveDraft() {
    this.assessmentService.saveAssessment(this.assessment, 'draft');
  }

  publishAssessment() {
    this.assessmentService.saveAssessment(this.assessment, 'published');
  }
}
