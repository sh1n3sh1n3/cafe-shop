import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-dumtea',
  template: `
    <div class="bg">
<main>
  <div class="tea-title">
    <h1 class="tea-title-f mb-1">Tea &nbsp;&nbsp; Menu</h1>
    <hr />
  </div>
  <div class="content">
    <div fxLayout="row wrap" fxLayoutGap="50px grid">
      <div
          fxFlex="25%"
          fxFlex.xs="100%"
          fxFlex.sm="50%"
          fxFlex.md="32%"
        *ngFor="let tea of Tea"
      >
        <mat-card class="mat-elevation-z4">
          <mat-card-header>
            <mat-card-title>{{ tea.name }}</mat-card-title>
          </mat-card-header>
          <img mat-card-image src="{{ tea.img }}" />
          <mat-card-content>
            <p>
              {{ tea.Details }}
            </p>
            <div class="text">Price :- &nbsp;₹{{tea.cprice}} &nbsp;<del class="del">₹{{tea.price}}</del> &nbsp;<b style="color: green;">{{tea.offer}} OFF</b> </div>
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
  <div class="tea-title">
    <h1 class="tea-title-f mb-1">Find &nbsp;&nbsp; Tea &nbsp;&nbsp; shop</h1>
    <hr />
  </div>
  <div class="map mat-elevation-z7">
    <iframe
      fxFlex="grid"
      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d59501.56667368879!2d72.83789488685204!3d21.237878509047633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stea%20in%20india!5e0!3m2!1sen!2sin!4v1665993208956!5m2!1sen!2sin"
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

.bg{
  background-image: url("../../../../assets/photos/background.jpg");
  background-color: #cccccc;
  background-repeat: no-repeat;
  background-size: cover;
}

.tea-title {
  margin-bottom: 4rem;
}
.tea-title-f {
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
  letter-spacing: 2px;
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
export class DumteaComponent implements OnInit {

  constructor(private toast: HotToastService, private router: Router,) { }

  ngOnInit(): void {
  }

  Tea = [
    {
      prodId: 1,
      img: "../../../assets/Tea/GreenTea.jpg",
      name: "Green Tea",
      Details: "Green tea is made from the Camellia sinensis plant Green tea is prepared by steaming and pan-frying the leaves and then drying them.",
      cprice: "110",
      price: "199",
      offer: "45%"
    },
    {
      prodId: 2,
      img: "../../../assets/Tea/LemonTea.jpg",
      name: "Lemon Tea",
      Details: "A one-to-one combination of fresh-brewed coffee and steamed milk add up to one distinctly delicious coffee drink remarkably mixed.",
      cprice: "80",
      price: "145",
      offer: "45%"
    },
    {
      prodId: 3,
      img: "../../../assets/Tea/matchaTea.jpg",
      name: "Matcha Tea",
      Details: "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.  ",
      cprice: "93",
      price: "169",
      offer: "45%"
    },
    {
      prodId: 4,
      img: "../../../assets/Tea/herbalTea.jpg",
      name: "Herbal Tea",
      Details: "Herbal teas can be made with fresh or dried flowers, fruit, leaves, seeds or roots. The herbal tea is then strained, sweetened if desired.",
      cprice: "83",
      price: "150",
      offer: "45%"
    },
  ];

  logged(): void {
    this.router.navigate(['/login'])
    this.toast.info(
      `<i>Please you have to Logged in first. <br> Thank You ! 😇🙏</i>`,
      {
        duration: 5000,
        dismissible: true,
        id:'pause'
      }
    )
  }

}
