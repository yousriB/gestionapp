import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  admin ={
    email:'',
    password:'',
  }
  token: any;
  constructor( private _auth:AuthService ,private router: Router){}
  ngOnInit(): void {
    
  }
  login(){
    this._auth.loginAdmin(this.admin).subscribe(
      (res)=>{
        console.log(res)
        this.token = res;//{mytoken : 'zfztzgzer'}
        localStorage.setItem('token',this.token.mytoken)
        this.router.navigate(['/home'])
      },
      (err)=>{
        console.log(err)
       
        alert("email or password incorrect")
        this.admin.password=''
        this.admin.email=''
      }
    )
    
  }
 

}
