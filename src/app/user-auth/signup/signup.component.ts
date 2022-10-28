import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsDontMatch: true };
    }
    return null;
  };
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignUpComponent implements OnInit {

  //signup formgroup start here....

  signUpForm = this.fb.group(
    {
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-z]{3,9}$')]),
      email: new FormControl('', {
        validators: [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{3,3}$'),],
          // asyncValidators: this.authservice.uniqueEmailValidator(),
      }),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z0-9._%+-]+\\@[0-9]{2,4}$'),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    { validators: passwordMatchValidator() }
  );

  public showPassword1: boolean = false;
  public showPassword2: boolean = false;

  constructor(
    private authservice: AuthenticationService,
    private userservice: UsersService,
    private fb: NonNullableFormBuilder,
    private router: Router,
    private toast: HotToastService
  ) { }

  ngOnInit(): void { }

  // validation get function....
  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  // hide and show password function.....
  public showHidePassword1(): void {
    this.showPassword1 = !this.showPassword1;
  }
  public showHidePassword2(): void {
    this.showPassword2 = !this.showPassword2;
  }

  // submit function starts
  signup() {
    if (!this.signUpForm.valid) {
      return;
    }
    const { name, email, password, confirmPassword } = this.signUpForm.value;
    console.log(this.signUpForm.value)
    this.authservice
      .signUp(email, password)
      .pipe(
        switchMap(({ user: { uid } }) =>
          this.userservice.addUser({ uid, email, displayName: name, password, confirmPassword })
        ),
        this.toast.observe({
          success: 'woohoo! 🎉😀 you are all set it Up!',
          loading: 'Signin in.... Please wait!!... ',
          error: ({ message }) => `user already registered?.. login now..`,
        })
      )
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
  }
}
