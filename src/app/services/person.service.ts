import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private persons: any[] = [];

  constructor() {}

  insert(person: any): Observable<{ msg: string, person: any }> {  
    return new Observable((subscriber => {
      const found = this.persons.find(p => p.email === person.email);
      let resp: any = { person };
      let msg: string;
      if (found) msg = "This person's email is already in use.";      
      else {
        this.persons.unshift(person);
        msg = "Person created successfully";
      } 
      resp.message = msg;
      subscriber.next(resp);
      subscriber.complete();
    }));
  }
}
