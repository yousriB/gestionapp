import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _auth:AuthService, private router:Router){}
  
  canActivate(){
    if (this._auth.isLoggedInadmin()) {
      return true
    }else{
      this.router.navigate(['/loginadmin'])
      return false
    }
  }
  
}
