import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrl: './registeruser.component.css'
})
export class RegisteruserComponent implements OnInit {
  user ={
    name:'',
    lastname:'',
    email:'',
    password:'',
    
  }
  constructor( private _auth:AuthService, private router: Router ){}
  ngOnInit(): void {
    
  }
  register(){
    this._auth.registerUser(this.user).subscribe(
      (res)=>{
        console.log(res)
        this.router.navigate(['/loginuser'])
      },
      (err)=>{
        console.log(err)
      }
    )
  }
}
