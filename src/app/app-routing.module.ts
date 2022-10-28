import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LandingComponent } from './component/landing/landing.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { LoginComponent } from './user-auth/login/login.component';
import { SignUpComponent } from './user-auth/signup/signup.component';
import { CoffeeComponent } from './pages/coffee/coffee.component';
import { FoodComponent } from './pages/food/food.component';
import { TeaComponent } from './pages/tea/tea.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { UserProfileComponent } from './user-auth/user-profile/user-profile.component';
import { DumcoffeeComponent } from './component/dummypages/dumcoffee/dumcoffee.component';
import { DumfoodComponent } from './component/dummypages/dumfood/dumfood.component';
import { DumteaComponent } from './component/dummypages/dumtea/dumtea.component';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['home']);

const redirectTocoffee = () => redirectUnauthorizedTo('coffeemenu');
const redirectTotea = () => redirectUnauthorizedTo(['teamenu']);
const redirectTofood = () => redirectUnauthorizedTo(['foodmenu']);

// const redirectToducof = () => redirectUnauthorizedTo(['']);
// const redirectTodute = () => redirectUnauthorizedTo(['']);
// const redirectTodufoo = () => redirectUnauthorizedTo(['']);
// const redirectTo = () => redirectLoggedInTo(['about']);
// const redirectTolanding = () => redirectUnauthorizedTo(['']);


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
    ...canActivate(redirectToHome)
  },
  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path: 'coffee',
    component: CoffeeComponent,
    ...canActivate(redirectTocoffee)
  },
  {
    path: 'tea',
    component: TeaComponent,
    ...canActivate(redirectTotea)
  },
  {
    path: 'food',
    component: FoodComponent,
    ...canActivate(redirectTofood)
  },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectToHome)
  },
  {
    path: 'signup',
    component: SignUpComponent,
    ...canActivate(redirectToHome)
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    ...canActivate(redirectToLogin)
  },

  
  {
    path: 'coffeemenu',
    component: DumcoffeeComponent,
  },
  {
    path: 'teamenu',
    component: DumteaComponent,
  },
  {
    path: 'foodmenu',
    component: DumfoodComponent,
  },
  {
    path: 'about',
    component: AboutUsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
