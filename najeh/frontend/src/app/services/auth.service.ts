import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  // private baseUrl = 'http://127.0.0.1:3000'; // Update with your actual backend URL

  private urlFormulaire = 'http://127.0.0.1:3000/formulaire/'; // Corrected URL

  private urlAdmin = 'http://127.0.0.1:3000/admin/'; // Corrected URL
  private urlUser = 'http://127.0.0.1:3000/user/'; // Corrected URL
  

  registerAdmin(admin: any) {
    return this.http.post(this.urlAdmin + 'register', admin);
  }

  loginAdmin(admin: any) {
    return this.http.post(this.urlAdmin + 'login', admin);
  }

  registerUser(user: any) {
    return this.http.post(this.urlUser + 'register', user);
  }

  loginUser(user: any) {
    return this.http.post(this.urlUser + 'login', user);
  }

  isLoggedInadmin(): boolean {
    if (typeof window !== 'undefined' && localStorage) {
      let token = localStorage.getItem('token');
      return token !== null;
    }
    return false;
  }
  
  isLoggedInauser(): boolean {
    if (typeof window !== 'undefined' && localStorage) {
      let token = localStorage.getItem('tokenu');
      return token !== null;
    }
    return false;
  }  

  getDataFromToken(){
    let token = localStorage.getItem('token');
    if (token) {
      let data = JSON.parse(window.atob(token.split('.')[1]))
      return data;
    }
  }
  getDataFromTokenuser(){
    let token = localStorage.getItem('tokenu');
    if (token) {
      let data = JSON.parse(window.atob(token.split('.')[1]))
      return data;
    }
  }

  getUserById(id:any){
    return this.http.get(this.urlUser+'getbyid/'+ id)
  }
  getUser(){
    return this.http.get(this.urlUser+'all/')
  }

  }




