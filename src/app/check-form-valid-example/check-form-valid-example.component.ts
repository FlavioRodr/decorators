import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PersonService } from 'src/app/services/person.service';
import { formValid } from './form-valid.decorator';

@Component({
  selector: 'app-code-repetition-example',
  templateUrl: './check-form-valid-example.component.html'
})
export class CheckFormValidExampleComponent implements OnInit {

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
  onSubmit(): void {
    this.personSvc.insert(this.form.value)
      .subscribe((res) => {
        this.postMessage(res.msg);
      });
  }

  postMessage(msg: string): void {
    this.toasterMsgs.unshift(msg);
    if (this.toasterMsgs.length > 3) {
      this.toasterMsgs.pop();
    }
  };
}
