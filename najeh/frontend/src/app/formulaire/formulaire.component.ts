import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent implements OnInit {
  id: any;

  constructor( private _data:DataService ,private act:ActivatedRoute , private _auth:AuthService , private router:Router){}
  ngOnInit(): void {
    this.getDataFromTokenuser()
  }
  user = {
    iduser:'',
    name: '',
    lastname: '',
    phone: '',
    message: '',
    Monday: '',
    Tuesday: '',
    Wednesday: '',
    Thursday: '',
    Friday: '',
    Saturday: '',
    Sunday: ''
    }

    logout() {
      localStorage.removeItem('tokenu')
      this.router.navigate(['/loginuser']);
    }

    registerForm() {
      if (this.user.name && this.user.lastname && this.user.phone && this.user.Monday && this.user.Tuesday && this.user.Wednesday && this.user.Thursday && this.user.Friday && this.user.Saturday && this.user.Sunday) {
        this._data.getFormulaireByIdUser(this.user.iduser).subscribe(
          (existingFormulaires) => {
            if (Array.isArray(existingFormulaires) && existingFormulaires.length > 0) {
              alert("A formulaire already exists for this user.");
            } else {
              this._data.createFormulaire(this.user).subscribe(
                (res) => {
                  console.log(res);
                  
                  Swal.fire({
                    title: "Good job!",
                    text: "Formulaire added successefuly!",
                    icon: "success"
                  });
                },
                (err) => {
                  console.log(err);
                }
              );
            }
          },
          (err) => {
            console.log(err);
          }
        );
      } else {
       
        Swal.fire({
          title: "Filed",
          text: "Please fill in all the information.",
          icon: "warning"
        });
      }
    }
    
  
  
    
    getDataFromTokenuser(){
      this.id = this._auth.getDataFromToken()._id
      this.user.iduser = this.id 
    }

   
    resetForm() {
      this.user = {
        iduser:'',
        name: '',
        lastname: '',
        phone: '',
        message: '',
        Monday: '',
        Tuesday: '',
        Wednesday: '',
        Thursday: '',
        Friday: '',
        Saturday: '',
        Sunday: ''
      };
    }
}
