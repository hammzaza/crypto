import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    ngOnInit() { 
    }
    credentials: TokenPayload = {
      username: '',
      password: ''
    };
    constructor(private auth: AuthenticationService, private router: Router) {}

    register() {
        this.auth.register(this.credentials).subscribe(() => {
          this.router.navigateByUrl('/profile');
      }, (err) => {
          console.error(err);
      });
    }

}
