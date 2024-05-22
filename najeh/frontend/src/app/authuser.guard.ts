import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuarduser implements CanActivate {
  constructor(private _auth:AuthService, private router:Router){}
  
  canActivate(){
    if (this._auth.isLoggedInauser()) {
      return true
    }else{
      this.router.navigate(['/loginuser'])
      return false
    }
  }
  
}
