import { Injectable } from '@angular/core';

interface Assessment {
  id: number;
  title: string;
  type: 'quiz' | 'assignment' | 'survey';
  questions: any[];
  grading: any;
  instructions: string;
  timeLimit: number;
  attempts: number;
  feedback: any;
  courseContent: string;
  status: 'draft' | 'published';
}

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {
  private assessments: Assessment[] = [
    { id: 1, title: 'Quiz 1', type: 'quiz', questions: [], grading: {}, instructions: '', timeLimit: 60, attempts: 1, feedback: {}, courseContent: '', status: 'draft' },
    { id: 2, title: 'Assignment 1', type: 'assignment', questions: [], grading: {}, instructions: '', timeLimit: 120, attempts: 1, feedback: {}, courseContent: '', status: 'published' }
  ];

  getAssessments() {
    return this.assessments;
  }

  getAssessmentById(id: number) {
    return this.assessments.find(assessment => assessment.id === id);
  }

  saveAssessment(assessment: Assessment, status: 'draft' | 'published') {
    const existing = this.assessments.find(a => a.id === assessment.id);
    if (existing) {
      Object.assign(existing, assessment, { status });
    } else {
      assessment.id = this.assessments.length + 1;
      assessment.status = status;
      this.assessments.push(assessment);
    }
  }
}
