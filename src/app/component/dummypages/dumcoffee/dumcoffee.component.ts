import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dumcoffee',
  template: `
    <div class="bg">
<main>
    <div class="coffee-title">
      <h1 class="coffee-title-f mb-1">Coffee &nbsp;&nbsp; Menu</h1>
      <mat-divider></mat-divider>
      </div>  
  <div class="content">
    <div fxLayout="row wrap" fxLayoutGap="50px grid">
      <div
          fxFlex="25%"
          fxFlex.xs="100%"
          fxFlex.sm="50%"
          fxFlex.md="32%"
        *ngFor="let coffee of Coffees"
      >
        <mat-card class="mat-elevation-z6">
          <mat-card-header>
            <mat-card-title>{{ coffee.name }}</mat-card-title>
          </mat-card-header>
          <img mat-card-image src="{{ coffee.img }}" />
          <mat-card-content>
            <p>
              {{ coffee.Details }}
            </p>
            <div class="text">Price :- &nbsp;₹{{coffee.cprice}} &nbsp;<del class="del">₹{{coffee.price}}</del> &nbsp;<b style="color: green;">25% OFF</b> </div>
          </mat-card-content>
          <mat-card-actions>
          <button
                mat-raised-button
                color="primary"
                (click)="logged()"
              ><span class="material-symbols-outlined"> redeem </span>
                Get Discount
              </button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  </div>

  <br>
  <br>
  <br>
  <hr />
  <div class="coffee-title">
    <h1 class="coffee-title-f mb-1">Find &nbsp;&nbsp;Coffee &nbsp;&nbsp; Shop</h1>
    <hr />
  </div>
  <div class="map mat-elevation-z7">
    <iframe
      fxFlex="grid"
      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14875.142616193396!2d72.8869814978061!3d21.240346698289184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scafe!5e0!3m2!1sen!2sin!4v1663782489880!5m2!1sen!2sin"
      width="1200"
      height="580"
      style="border: 2px"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</main>
</div>

  `,
  styles: [`
  main {
  padding: 2%;
}

.bg {
  background-image: url("../../../../assets/photos/background.jpg");
  background-color: #cccccc;
  background-repeat: no-repeat;
  background-size: cover;
}

.coffee-title {
  margin-bottom: 4rem;
}

.coffee-title-f {
  font-size: 2.5rem;
}

h1 {
  font-family: monoton;
  font-size: 35px;
  padding-left: 5%;
  padding-top: 2%;
  padding-bottom: 2%;
}

.content {
  padding: 16px;
  justify-content: center;
}

mat-card {
  padding: 30px;
  border-radius: 10px;
}

mat-card > img {
  transition: 1s;
  box-shadow: 0px 5px 15px 0px hsla(0, 0%, 100%, 0);
}

mat-card > img:hover {
  transition: 300ms;
  background-color: rgb(0, 0, 0);
  transform: translateY(-5px);
  box-shadow: 0px 10px 20px 2px rgba(118, 106, 106, 0.816);
}

mat-card-title {
  font-family: monoton;
  font-size: 40px;
}

.content > mat-card {
  max-width: 300px;
  max-height: 600px;
}

button {
  font-size: 20px;
  font-family: monoton;
  letter-spacing: 2px;
  text-align: center;
}

img {
  border-radius: 30px;
}
p {
  font-family: monospace;
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 18px;
}

.text{
  padding-top:10px;
  font-size: 20px;
  font-family: monospace;
  color: black;
}

.del{
  color:gray;
  opacity:1rem;
}

.map {
  margin: 9%;
}

  `
  ]
})
export class DumcoffeeComponent implements OnInit {


  constructor(private toast: HotToastService, private router: Router,) { }

  ngOnInit(): void {
  }


  Coffees = [
    {
      prodId: 1,
      img: "../../../assets/coffee/caffe-americano.jpg",
      name: "Caffè Americano",
      Details: "Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth.",
      cprice: "106",
      price: "142",
      offer: "25%"
    },
    {
      prodId: 2,
      img: "../../../assets/coffee/caffe-misto.jpg",
      name: "Caffè Misto",
      Details: "A one-to-one combination of fresh-brewed coffee and steamed milk add up to one distinctly delicious coffee drink.",
      cprice: "123",
      price: "163",
      offer: "25%"
    },
    {
      prodId: 3,
      img: "../../../assets/coffee/cappuccino.jpg",
      name: "cappuccino",
      Details: "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry.  ",
      cprice: "95",
      price: "126",
      offer: "25%"
    },
    {
      prodId: 4,
      img: "../../../assets/coffee/dark-roast-coffee.jpg",
      name: "dark-roast-coffee",
      Details: "This full-bodied dark roast coffee with bold, robust flavors showcases our roasting and blending artistry.",
      cprice: "112",
      price: "149",
      offer: "25%"
    },
    {
      prodId: 5,
      img: "../../../assets/coffee/espresso-macchiato.jpg",
      name: "espresso-macchiato",
      Details: "Our rich espresso marked with dollop of steamed milk and foam. A European-style classic. all customer says best coffee ever",
      cprice: "107",
      price: "142",
      offer: "25%"
    },
    {
      prodId: 6,
      img: "../../../assets/coffee/espresso.jpg",
      name: "espresso",
      Details: "Our smooth signature Espresso Roast with rich flavor and caramelly sweetness is at the very heart of everything we do.",
      cprice: "87",
      price: "116",
      offer: "25%"
    },
    {
      prodId: 7,
      img: "../../../assets/coffee/flat-white.jpg",
      name: "flat-white",
      Details: "Smooth ristretto shots of espresso get the perfect amount of steamed whole milk to create a not-too-strong.",
      cprice: "127",
      price: "169",
      offer: "25%"
    },
  ];

  logged(): void {
    this.router.navigate(['/login'])
    this.toast.info(
      `<i>Please you have to Logged in first. <br> Thank You ! 😇🙏</i>`,
      {
        duration: 5000,
        dismissible: true,
        id: 'pause'
      }
    )
  }
}