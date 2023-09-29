import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSubService {
  userSubject : Subject<string> = new Subject<string>()
  constructor() { }
}
