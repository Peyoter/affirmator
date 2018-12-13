import {Component, OnInit} from '@angular/core';
import {UserService} from '../../_services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  public users;

  constructor(private userService: UserService) { }

  ngOnInit() {
      this.userService.getUsers().subscribe(users => {
          this.users = users;
      });
  }

}
