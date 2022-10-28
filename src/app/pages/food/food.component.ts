import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import {MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Clipboard } from '@angular/cdk/clipboard';
import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  constructor(public dialog: MatDialog, private toast: HotToastService) { }

  ngOnInit(): void {
  }

  Foods = [
    {
      prodId: 1,
      img: "../../../assets/food/veg burger.jpg",
      name: "Veg burger",
      Details: "A one-to-one combination of fresh-brewed coffee and steamed milk add up to one distinctly delicious coffee drink remarkably mixed.",
      cprice:"72",
      price: "90",
      offer:"20%"
    },
    {
      prodId: 2,
      img: "../../../assets/food/macaroni pasta.jpg",
      name: "macaroni Pasta",
      Details: "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.  ",
      cprice:"64",
      price: "80",
      offer:"20%"
    },
    {
      prodId: 3,
      img: "../../../assets/food/penne pasta.jpg",
      name: "Penne Pasta",
      Details: "This full-bodied dark roast coffee with bold, robust flavors showcases our roasting and blending artistry—an essential blend of balanced and lingering flavors.",
      cprice:"100",
      price: "125",
      offer:"20%"
    },
    {
      prodId: 4,
      img: "../../../assets/food/margheritapizza.jpg",
      name: "Margherita Pizza",
      Details: "Our rich espresso marked with dollop of steamed milk and foam. A European-style classic.",
      cprice:"140",
      price: "175",
      offer:"20%"
    },
    {
      prodId: 5,
      img: "../../../assets/food/italian pizza.jpg",
      name: "Italian Pizza",
      Details: "Our smooth signature Espresso Roast with rich flavor and caramelly sweetness is at the very heart of everything we do.",
      cprice:"135",
      price: "169",
      offer:"20%"
    },
  ];

  foodDialog():void {
    const dialogRef = this.dialog.open(fooddialog);

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
  selector: 'food-dialog',
  templateUrl: './food-dialog.html',
})
export class fooddialog {
  user$ = this.userservice.currentUserProfile$;
  constructor( private toast: HotToastService , private clipboard: Clipboard ,private userservice: UsersService) { }
  
  ngOnInit(): void {
  }

  discount(){
    this.toast.info(
      `you can use this code to buy a coffee on online from other plateform also. <br> Thank You ! 😇🙏`,
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
