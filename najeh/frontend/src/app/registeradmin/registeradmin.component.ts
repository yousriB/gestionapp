import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeradmin',
  templateUrl: './registeradmin.component.html',
  styleUrl: './registeradmin.component.css'
})
export class RegisteradminComponent implements OnInit {
  admin ={
    name:'',
    lastname:'',
    email:'',
    password:'',
    
  }
  constructor( private _auth:AuthService , private router: Router ){}
  ngOnInit(): void {
    
  }
  register(){
    this._auth.registerAdmin(this.admin).subscribe(
      (res)=>{
        console.log(res)
        this.router.navigate(['/loginadmin'])
      },
      (err)=>{
        console.log(err)
      }
    )
    
  }
}
