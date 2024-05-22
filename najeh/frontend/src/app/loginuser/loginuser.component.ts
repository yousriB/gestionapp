import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrl: './loginuser.component.css'
})
export class LoginuserComponent {
  user ={
    email:'',
    password:'',
  }
  token: any;
  constructor( private _auth:AuthService ,private router: Router){}
  ngOnInit(): void {
    
  }
  login(){
    this._auth.loginUser(this.user).subscribe(
      (res)=>{
        console.log(res)
        this.token = res;//{mytoken : 'zfztzgzer'}
        localStorage.setItem('tokenu',this.token.mytoken)
        this.router.navigate(['/formulaire'])
       
      },
      (err)=>{
        console.log(err)
        alert("email or password is incorrect")
        this.user.password=''
        this.user.email=''
      }
    )
    
  }
}
