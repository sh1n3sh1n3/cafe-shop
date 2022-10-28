import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeComponent } from './coffee/coffee.component';
import { FoodComponent } from './food/food.component';
import { TeaComponent } from './tea/tea.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    CoffeeComponent,
    FoodComponent,
    TeaComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    RouterModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule
  ]
})
export class PagesModule { }
