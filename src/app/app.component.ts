import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from './services/authentication.service';
import { UsersService } from './services/users.service';
import { BreakpointObserver } from '@angular/cdk/layout'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  title = 'Groots_Cafe';
  ngOnInit(): void {
  }
  user$ = this.usersService.currentUserProfile$;

  constructor(public authService: AuthenticationService, private router: Router, private usersService: UsersService, private toast: HotToastService, private observer: BreakpointObserver) { }
  
  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }
    });
  }
  
  logout() {
    this.authService.logout().pipe(
      this.toast.observe({
        loading: 'almost done',
        success: 'you are successfully logout.. 🎉👍',
      }),
    ).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  user() {
      this.toast.warning("this feature is not available right now sorry! 😀",
      {autoClose: false,
      dismissible:true,
    position: 'bottom-left'})
  };
}