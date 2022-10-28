import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Clipboard } from '@angular/cdk/clipboard';
import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css'],
})


export class CoffeeComponent implements OnInit {



  constructor(public dialog: MatDialog, private toast: HotToastService) { }

  ngOnInit(): void {
  }


  Coffees = [
    {
      prodId: 1,
      img: "../../../assets/coffee/caffe-americano.jpg",
      name: "Caffè Americano",
      Details: "Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth.",
      cprice:"106",
      price: "142",
      offer:"25%"
    },
    {
      prodId: 2,
      img: "../../../assets/coffee/caffe-misto.jpg",
      name: "Caffè Misto",
      Details: "A one-to-one combination of fresh-brewed coffee and steamed milk add up to one distinctly delicious coffee drink.",
      cprice:"123",
      price: "163",
      offer:"25%"
    },
    {
      prodId: 3,
      img: "../../../assets/coffee/cappuccino.jpg",
      name: "cappuccino",
      Details: "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry.  ",
      cprice:"95",
      price: "126",
      offer:"25%"
    },
    {
      prodId: 4,
      img: "../../../assets/coffee/dark-roast-coffee.jpg",
      name: "dark-roast-coffee",
      Details: "This full-bodied dark roast coffee with bold, robust flavors showcases our roasting and blending artistry.",
      cprice:"112",
      price: "149",
      offer:"25%"
    },
    {
      prodId: 5,
      img: "../../../assets/coffee/espresso-macchiato.jpg",
      name: "espresso-macchiato",
      Details: "Our rich espresso marked with dollop of steamed milk and foam. A European-style classic. all customer says best coffee ever",
      cprice:"107",
      price: "142",
      offer:"25%"
    },
    {
      prodId: 6,
      img: "../../../assets/coffee/espresso.jpg",
      name: "espresso",
      Details: "Our smooth signature Espresso Roast with rich flavor and caramelly sweetness is at the very heart of everything we do.",
      cprice:"87",
      price: "116",
      offer:"25%"
    },
    {
      prodId: 7,
      img: "../../../assets/coffee/flat-white.jpg",
      name: "flat-white",
      Details: "Smooth ristretto shots of espresso get the perfect amount of steamed whole milk to create a not-too-strong.",
      cprice:"127",
      price: "169",
      offer:"25%"
    },
  ];



  coffeeDialog(): void {
    const dialogRef = this.dialog.open(coffeedialog);

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
  selector: 'coffee-dialog',
  templateUrl: './coffee-dialog.html',
})
export class coffeedialog {
  user$ = this.userservice.currentUserProfile$;
  constructor(private toast: HotToastService, private clipboard: Clipboard, private userservice: UsersService) { }

  ngOnInit(): void {
  }

  discount() {
    this.toast.info(
      `you can use this code to buy a coffee on online from other plateform also. <br> Thank You ! 😇🙏`,
      {
        duration: 5000,
        dismissible: true
      }
    );
  }
  copyText(textToCopy: string) {
    this.clipboard.copy(textToCopy);
    this.toast.success(
      'Code Coppied Successfully 🙏 ', {
      dismissible: true,
      duration: 4000
    }
    );
  }

}