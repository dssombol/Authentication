import { AdminComponent } from './components/admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './components/auth.guard';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
 {path:'login',component:LoginComponent},
 {path:'',component:HomeComponent},
 {path:'admin',component:AdminComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
