import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestUpdate } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id: string;
  request: RequestUpdate;

  constructor(private userService: UserService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe(res =>{
      this.request = {
        email: res.data.email,
        first_name: res.data.first_name,
        last_name: res.data.last_name,
        avatar: res.data.avatar,
      }
    });
  }
  update(){
    this.userService.updateUser(this.id, this.request).subscribe(res =>{
      this.router.navigate(['/users']);
    });
  }
}
