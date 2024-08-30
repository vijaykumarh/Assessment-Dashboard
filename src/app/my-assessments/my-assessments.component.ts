import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../assessment.service';

@Component({
  selector: 'app-my-assessments',
  templateUrl: './my-assessments.component.html',
  styleUrls: ['./my-assessments.component.css']
})
export class MyAssessmentsComponent implements OnInit {
  assessments = [];

  constructor(private assessmentService: AssessmentService) {}

  ngOnInit(): void {
    this.assessments = this.assessmentService.getAssessments();
  }

  editAssessment(id: number) {
    // Logic to navigate to the edit page
  }

  viewAnalytics(id: number) {
    // Logic to view analytics
  }
}
