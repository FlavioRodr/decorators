import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckFormValidExampleComponent } from './check-form-valid-example/check-form-valid-example.component';
import { CodeRepetitionExampleComponent } from './code-repetition-example/code-repetition-example.component';
import { MarkFormTouchedExampleComponent } from './mark-form-touched-example/mark-form-touched-example.component';

const routes: Routes = [
  { path: 'code-repetition', component: CodeRepetitionExampleComponent },
  { path: 'check-form-valid', component: CheckFormValidExampleComponent },
  { path: 'mark-touched', component: MarkFormTouchedExampleComponent },
  { path: '', redirectTo: '/code-repetition', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
