import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestCreate, ResponseCreate } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  request: RequestCreate = {
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  };

  response: ResponseCreate;

  constructor(private UserService: UserService, private _route: Router) {}

  ngOnInit(): void {}

  save() {
    this.UserService.createUser(this.request).subscribe((res) => {
      this.response = res;
      this._route.navigate(['/users']);
    });
  }
}
