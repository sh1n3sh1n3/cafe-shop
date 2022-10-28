import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{3,3}$'),]),
    password: new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z0-9._%+-]+\\@[0-9]{2,4}$")])
  });

  public showPassword: boolean = false;
  public showPassword1: boolean = false;

  constructor(private authservice:AuthenticationService,private router: Router, private toast: HotToastService) { }

  ngOnInit(): void { }

  public showHidePassword(): void {
    this.showPassword = !this.showPassword;
  }

  get email() {
    return this.loginform.get('email');
  }

  get password() {
    return this.loginform.get('password')
  }

  login() {
    
    const { email, password } = this.loginform.value;
    

    if (!this.loginform.valid || !email || !password) {
      return;
    }
    console.log(this.loginform.value.email);
    this.authservice.login(email, password).pipe(
      // switchMap(({ user: { uid } }) =>
      //     this.userservice.updateUser({ uid, email, password })
      //   ),
      this.toast.observe({
        success: 'Logged in successfully',
        loading: 'Logging in Please wait......',
        error: '<b>you are not signed up yet!! signup first!!</b>'
      })
    ).subscribe(() => {
      this.router.navigate(['home']);
    });
  }
}