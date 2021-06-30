import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators'
import { PersonService } from '../services/person.service';
import { formValid } from './form-valid.decorator';

@Component({
  selector: 'app-wait-form-submission-example',
  templateUrl: './wait-form-submission-example.component.html',
  styleUrls: ['./wait-form-submission-example.component.scss']
})
export class WaitFormSubmissionExampleComponent implements OnInit {

  email: FormControl;
  firstName: FormControl;
  lastName: FormControl;
  form: FormGroup;
  toasterMsgs: string[] = [];

  constructor(private personSvc: PersonService) { }

  ngOnInit(): void {
    this.email = new FormControl(null, [Validators.required, Validators.email]);
    this.firstName = new FormControl(null, [Validators.required]);

    this.form = new FormGroup({
      email: this.email,
      firstName: this.firstName
    });
  }

  @formValid('form')
  onSubmit(): Observable<any> {
    return this.personSvc.insert(this.form.value);
  }

  @formValid('form')
  onSubmit2(): Observable<any> {
    return this.personSvc.insert(this.form.value)
    .pipe(switchMap(resp => {
     // Custom component logic that depends on the service response 
      return of();
    }));
  }
}
