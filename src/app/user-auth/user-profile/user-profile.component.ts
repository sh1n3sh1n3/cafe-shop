import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})

@UntilDestroy()
export class UserProfileComponent implements OnInit {
  user$ = this.authservice.currentUser$;

  profileForm = this.fb.group({
    displayName: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('[+.0-9]{13}$'),
    ]),
    address: new FormControl('' , [Validators.required, Validators.minLength(30)]),
    uid: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z0-9._%+-]+\\@[0-9]{2,4}$")])
  });

  public showPassword: boolean = false;

  constructor(
    private authservice: AuthenticationService,
    private userservice: UsersService,
    private router: Router,
    private fb: NonNullableFormBuilder,
    private toast: HotToastService
  ) { }

  ngOnInit(): void {
    this.userservice.currentUserProfile$
      .pipe(untilDestroyed(this))
      .subscribe((user) => {
        this.profileForm.patchValue({ ...user });
      });
  }

  public showHidePassword(): void {
    this.showPassword = !this.showPassword;
  }

  get firstName() {
    return this.profileForm.get('phone');
  }
  get lastName() {
    return this.profileForm.get('lastName');
  }
  get displayName() {
    return this.profileForm.get('displayName');
  }
  get phone() {
    return this.profileForm.get('phone');
  }
  get address() {
    return this.profileForm.get('address');
  }
  get password() {
    return this.profileForm.get('password')
  }

  SaveProfile() {
    const { uid, ...data } = this.profileForm.value;
    // const ref = this.toast.show(
    //   'I will be closed using ref.',
    //   { autoClose: false, icon: '🕵️' }
    // );
    // setTimeout(() => {
    //   ref.close();
    // }, 3000);

    if (!uid) {
      return;
    }

    this.userservice
      .updateUser({ uid, ...data })
      .pipe(
        this.toast.observe({
          loading: 'Saving profile data... 🎉👍',
          success: 'Wohooo!! 😀👍 Data has been Updated',
          error: 'There was an error 🚩⁉️🚫⚠️ Please Try again',
        })
      )
      .subscribe(() => {
        this.router.navigate(['home']);
      });
  }
}
