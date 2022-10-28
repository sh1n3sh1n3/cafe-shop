import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import {MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Clipboard } from '@angular/cdk/clipboard';
import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-tea',
  templateUrl: './tea.component.html',
  styleUrls: ['./tea.component.css'],
})
export class TeaComponent implements OnInit {

  constructor(public dialog: MatDialog, private toast: HotToastService) { }

  ngOnInit(): void {
  }

  Tea = [
    {
      prodId: 1,
      img: "../../../assets/Tea/GreenTea.jpg",
      name:"Green Tea",
      Details:"Green tea is made from the Camellia sinensis plant Green tea is prepared by steaming and pan-frying the leaves and then drying them.",
      cprice:"110",
      price: "199",
      offer:"45%"
    },
    {
      prodId: 2,
      img: "../../../assets/Tea/LemonTea.jpg",
      name:"Lemon Tea",
      Details:"A one-to-one combination of fresh-brewed coffee and steamed milk add up to one distinctly delicious coffee drink remarkably mixed.",
      cprice:"80",
      price: "145",
      offer:"45%"
    },
    {
      prodId: 3,
      img: "../../../assets/Tea/matchaTea.jpg",
      name:"Matcha Tea",
      Details:"Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.  ",
      cprice:"93",
      price: "169",
      offer:"45%"
    },
    {
      prodId: 4,
      img: "../../../assets/Tea/herbalTea.jpg",
      name:"Herbal Tea",
      Details:"Herbal teas can be made with fresh or dried flowers, fruit, leaves, seeds or roots. The herbal tea is then strained, sweetened if desired.",
      cprice:"83",
      price: "150",
      offer:"45%"
    },
  ];

  teaDialog():void {
    const dialogRef = this.dialog.open(teadialog);

    dialogRef.afterClosed()
    // .pipe(
    //   this.toast.observe({
    //     success:"you can use this code to buy a coffee also 😇🙏"
    //   }))
    .subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  
}

@Component({
  selector: 'tea-dialog',
  templateUrl: './tea-dialog.html',
})
export class teadialog {
  user$ = this.userservice.currentUserProfile$;
  constructor( private toast: HotToastService , private clipboard: Clipboard ,private userservice: UsersService) { }
  
  ngOnInit(): void {
  }

  // Tea = [
  //   {
  //     prodId: 1,
  //     img: "../../../assets/Tea/GreenTea.jpg",
  //     name:"Green Tea",
  //     Details:"Green tea is generally known to have lower caffeine content per cup than black tea and much lower caffeine content than coffee.",
  //     price: "2.10",
  //   },
  // ];

  discount(){
    this.toast.info(
      `you can use this code to buy a Tea on online from other plateform also. <br> Thank You ! 😇🙏`,
      {duration:5000,
      dismissible:true}
);
  }
  copyText(textToCopy: string) {
    this.clipboard.copy(textToCopy);
    this.toast.success(
      'Code Coppied Successfully 🙏 ',{
        dismissible:true,
        duration:4000
      }
    );
}
}
