import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-dumfood',
  template: `
    <div class="bg">
  <main>
    <div class="food-title">
      <h1 class="food-title-f mb-1">Food &nbsp;&nbsp; Menu</h1>
      <hr />
    </div>
    <div class="content">
      <div fxLayout="row wrap" fxLayoutGap="50px grid">
        <div
        fxFlex="25%"
          fxFlex.xs="100%"
          fxFlex.sm="50%"
          fxFlex.md="32%"
          *ngFor="let food of Foods"
        >
          <mat-card class="mat-elevation-z4">
            <mat-card-header>
              <mat-card-title>{{ food.name }}</mat-card-title>
            </mat-card-header>
            <img mat-card-image src="{{ food.img }}" />
            <mat-card-content>
              <p>
                {{ food.Details }}
              </p>
              <div class="text">Price :- &nbsp;₹{{food.cprice}} &nbsp;<del class="del">₹{{food.price}}</del> &nbsp;<b style="color: green;">{{food.offer}} OFF</b> </div>
            </mat-card-content>
            <button
                mat-raised-button
                color="primary"
                (click)="logged()"
              ><span class="material-symbols-outlined"> redeem </span>
                Get Discount
              </button>
          </mat-card>
        </div>
      </div>
    </div>
    <br>
    <br>
    <br>
    <hr />
    <div class="food-title">
      <h1 class="food-title-f mb-1">
        Find &nbsp;&nbsp; Food &nbsp;&nbsp; Shop
      </h1>
      <hr />
    </div>
    <div class="map mat-elevation-z7">
      <iframe
        fxFlex="grid"
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d204504.7442435719!2d72.76121269664375!3d21.249649002555714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMcDonald&#39;s%20%2C%20lapinoz%2C%20dominoz%2C%20pizzahut!5e0!3m2!1sen!2sin!4v1665993631196!5m2!1sen!2sin"
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

.food-title {
  margin-bottom: 4rem;
}
.food-title-f {
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
}

mat-card {
  padding: 30px;
  border-radius: 15px;
}

mat-card > img {
  transition: 1s;
  box-shadow: 0px 5px 15px 0px hsla(0, 0%, 100%, 0);
}

mat-card > img:hover {
  transition: 300ms;
  background-color: black;
  transform: translateY(-5px);
  box-shadow: 0px 10px 20px 2px rgba(40, 34, 34, 0.816);
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
  margin: 10%;
}

  `
  ]
})
export class DumfoodComponent implements OnInit {

  constructor(private toast: HotToastService, private router: Router,) { }

  ngOnInit(): void {
  }

  Foods = [
    {
      prodId: 1,
      img: "../../../assets/food/veg burger.jpg",
      name: "Veg burger",
      Details: "A one-to-one combination of fresh-brewed coffee and steamed milk add up to one distinctly delicious coffee drink remarkably mixed.",
      cprice: "72",
      price: "90",
      offer: "20%"
    },
    {
      prodId: 2,
      img: "../../../assets/food/macaroni pasta.jpg",
      name: "macaroni Pasta",
      Details: "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.  ",
      cprice: "64",
      price: "80",
      offer: "20%"
    },
    {
      prodId: 3,
      img: "../../../assets/food/penne pasta.jpg",
      name: "Penne Pasta",
      Details: "This full-bodied dark roast coffee with bold, robust flavors showcases our roasting and blending artistry—an essential blend of balanced and lingering flavors.",
      cprice: "100",
      price: "125",
      offer: "20%"
    },
    {
      prodId: 4,
      img: "../../../assets/food/margheritapizza.jpg",
      name: "Margherita Pizza",
      Details: "Our rich espresso marked with dollop of steamed milk and foam. A European-style classic.",
      cprice: "140",
      price: "175",
      offer: "20%"
    },
    {
      prodId: 5,
      img: "../../../assets/food/italian pizza.jpg",
      name: "Italian Pizza",
      Details: "Our smooth signature Espresso Roast with rich flavor and caramelly sweetness is at the very heart of everything we do.",
      cprice: "135",
      price: "169",
      offer: "20%"
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
