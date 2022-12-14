import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { User } from 'src/app/model/user.model';

@Component({
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  public user: User;
  public errorMessage: String;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.user = new User();
  }

  authenticate(form: NgForm) {
    if(form.valid) {
      // perform authentication
      this.auth.authenticate(this.user).subscribe(data => {
        if (data.success) {
          this.auth.storeUserData(data.token, data.user);
          this.router.navigateByUrl('/survey');
        }
      })
    }
    else {
      this.errorMessage = 'Form Data Invalid';
    }
  }

}
