import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodeRepetitionExampleComponent } from './code-repetition-example/code-repetition-example.component';
import { CheckFormValidExampleComponent } from './check-form-valid-example/check-form-valid-example.component';
import { MarkFormTouchedExampleComponent } from './mark-form-touched-example/mark-form-touched-example.component';
import { WaitFormSubmissionExampleComponent } from './wait-form-submission-example/wait-form-submission-example.component';
import { ToasterComponent } from './toaster/toaster.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeRepetitionExampleComponent,
    CheckFormValidExampleComponent,
    MarkFormTouchedExampleComponent,
    WaitFormSubmissionExampleComponent,
    ToasterComponent
  ],
  imports: [    
    BrowserModule,    
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
