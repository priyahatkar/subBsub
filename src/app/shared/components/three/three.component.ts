import { Component, OnInit } from '@angular/core';
import { UserSubService } from '../../service/user-sub.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {
 username !: string;
  constructor(private _userService : UserSubService) { }

  ngOnInit(): void {
    this._userService.userSubject
      .subscribe(res => this.username = res)
  }

}
