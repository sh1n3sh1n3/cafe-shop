import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HotToastModule } from '@ngneat/hot-toast';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingComponent } from './component/landing/landing.component';
import { HomeComponent } from './component/home/home.component';
import { environment } from '../environments/environment';
import { UserAuthModule } from './user-auth/user-auth.module';
import { PagesModule } from './pages/pages.module';
import { MatDialogModule } from '@angular/material/dialog';
import { coffeedialog } from './pages/coffee/coffee.component';
import { fooddialog } from './pages/food/food.component';
import { teadialog } from './pages/tea/tea.component';
import { DumcoffeeComponent } from './component/dummypages/dumcoffee/dumcoffee.component';
import { DumteaComponent } from './component/dummypages/dumtea/dumtea.component';
import { DumfoodComponent } from './component/dummypages/dumfood/dumfood.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    coffeedialog,
    teadialog,
    fooddialog,
    DumcoffeeComponent,
    DumteaComponent,
    DumfoodComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,    
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    HotToastModule.forRoot(
      // {
      //   position: 'top-center',
      //   reverseOrder: true, 
      //   success:({
      //     style: {
      //       padding: '30px',
      //       color: '#713200',
      //     },
      //     iconTheme: {
      //       primary: '#713200',
      //       secondary: '#FFFAEE',
      //     },
      //   }),
      // }
    ),
    MatMenuModule,
    UserAuthModule,
    PagesModule,
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
