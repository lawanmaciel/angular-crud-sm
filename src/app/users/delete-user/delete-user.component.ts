import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  id: string;
  user: User;

  constructor(private userService: UserService, private route:ActivatedRoute, private _route: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe(res =>{
      this.user = res.data;
    });
  }
  delete(){
    this.userService.deleteUser(this.id).subscribe(res =>{
      this._route.navigate(['/users']);
    });
  }
  cancel(){
    this._route.navigate(['/users']);
  }
}
