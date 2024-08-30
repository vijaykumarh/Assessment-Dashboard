import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentDashboardComponent } from './assessment-dashboard/assessment-dashboard.component';
import { CreateAssessmentComponent } from './create-assessment/create-assessment.component';

const routes: Routes = [
  { path: '', component: AssessmentDashboardComponent },
  { path: 'create', component: CreateAssessmentComponent },
  { path: '**', redirectTo: '' } // Redirect to dashboard if no match
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
