import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private usersService: UsersService, private toast: HotToastService) { }

  user$ = this.usersService.currentUserProfile$;

  ngOnInit(): void {
  }


  showtoast() {
    this.toast.show(
          `This is only for your welcome 🙏`
    );
  }

  construction(){
    this.toast.warning(
      '<h3>This Page is Not Responding ⚠️🚩😦.... Sorry it may be Under construction.</h3>'
    )
  }
}
