import { Component, OnInit } from '@angular/core';
import { UserSubService } from '../../service/user-sub.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  constructor(private _userService : UserSubService) { }

  ngOnInit(): void {
  }
  updateUserName(name : string){
    console.log('clicked');
    this._userService.userSubject.next(name)
  }
}
