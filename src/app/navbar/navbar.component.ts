import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from '../_services/authentication.service';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

    public isAuth: boolean;

    public userEmail: string;

    constructor(private authenticationService: AuthenticationService,
                private userService: UserService) {
    }

    ngOnInit() {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (user && user.access_token) {
            this.isAuth = true;
            this.userService.getAuth().subscribe(user => {
                this.userEmail = user.email;
            });
        }
    }

    logout(): void {
        this.authenticationService.logout();
        location.reload(true);
    }
}
