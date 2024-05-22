import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisteradminComponent } from './registeradmin/registeradmin.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { AuthGuard } from './auth.guard';
import { AuthGuarduser } from './authuser.guard';

const routes: Routes = [
  {path:'' , redirectTo:'/home', pathMatch:'full'},
  {path:'home' ,canActivate:[AuthGuard], component:HomeComponent},
  {path:'loginadmin' , component:LoginComponent},
  {path:'loginuser' , component:LoginuserComponent},
  {path:'registeradmin' , component:RegisteradminComponent},
  {path:'registeruser' , component:RegisteruserComponent},
  {path:'formulaire' ,canActivate:[AuthGuarduser], component:FormulaireComponent},
  {path:'**' , component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
