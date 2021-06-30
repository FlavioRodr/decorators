import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-code-repetition-example',
  templateUrl: './code-repetition-example.component.html'
})
export class CodeRepetitionExampleComponent implements OnInit {

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

  onSubmit(): void {
    if (this.form.valid) {
      this.personSvc.insert(this.form.value)
        .subscribe((res) => {
          this.postMessage(res.msg);
        });
    }
  }

  postMessage(msg: string): void {
    this.toasterMsgs.unshift(msg);
    if (this.toasterMsgs.length > 3) {
      this.toasterMsgs.pop();
    }
  };
}
