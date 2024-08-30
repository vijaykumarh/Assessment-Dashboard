import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssessmentDashboardComponent } from './assessment-dashboard/assessment-dashboard.component';
import { MyAssessmentsComponent } from './my-assessments/my-assessments.component';
import { CreateAssessmentComponent } from './create-assessment/create-assessment.component';
import { AssessmentSearchComponent } from './assessment-search/assessment-search.component';
import { RecentActivitiesComponent } from './recent-activities/recent-activities.component';
import { AssessmentAnalyticsComponent } from './assessment-analytics/assessment-analytics.component';
import { QuestionCreationToolComponent } from './question-creation-tool/question-creation-tool.component';
import { GradingOptionsComponent } from './grading-options/grading-options.component';
import { FeedbackOptionsComponent } from './feedback-options/feedback-options.component';

@NgModule({
  declarations: [
    AppComponent,
    AssessmentDashboardComponent,
    MyAssessmentsComponent,
    CreateAssessmentComponent,
    AssessmentSearchComponent,
    RecentActivitiesComponent,
    AssessmentAnalyticsComponent,
    QuestionCreationToolComponent,
    GradingOptionsComponent,
    FeedbackOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
