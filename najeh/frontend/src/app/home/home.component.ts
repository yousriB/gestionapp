import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ScheduleService } from '../schedule.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  // Corrected to 'styleUrls'
})
export class HomeComponent implements OnInit {
  scheduleData: any[] = [];
  isSidebarHidden: boolean = false;
  userData: any;
  Uemail: any;
  Uname: any;
  formulaires: any;
  users: any;


  constructor(
    private scheduleService: ScheduleService, private _data:DataService,
    private _auth: AuthService, private router:Router,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngOnInit(): void {
    this._data.getAllUsers().subscribe(res=>{this.users = res},err=>{console.log(err)})
    this.fetchFormulaires()
    this.getdatafromtoken()

    if (isPlatformBrowser(this.platformId)) {
      document.getElementById('nav-toggle')?.addEventListener('click', () => {
        const navContent = document.getElementById('nav-content');
        if (navContent?.classList.contains('hidden')) {
          navContent.classList.remove('hidden');
        } else {
          navContent?.classList.add('hidden');
        }
      });
    }
    
    this.scheduleData = this.scheduleService.getSchedule();
    
  }

  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;
  }

  async submitSchedule() {
    this.scheduleService.setSchedule(this.scheduleData);
    try {
      const res = await this._data.createTableFinal(this.scheduleService.getSchedule()).toPromise();
      console.log(res);
      Swal.fire({
        title: "Good job!",
        text: "Formulaire added successefuly!",
        icon: "success"
      });
    } catch (err) {
      console.log(err);
    }
    
  }


getdatafromtoken(){
  this.Uname = this._auth.getDataFromToken().fullname
  this.Uemail = this._auth.getDataFromToken().email
}

logout() {
  localStorage.removeItem('token')
  this.router.navigate(['/loginadmin']);
}

fetchFormulaires() {
  this._data.getAllFormulaire().subscribe(
    (res) => {
      this.formulaires = res; // Assuming your API returns an array of formulaire objects
    },
    error => {
      console.error('Error fetching formulaires:', error);
    }
  );
}

deleteall(){
  this._data.deleteAllFormulaire().subscribe(
    res=>{
      console.log(res)
      Swal.fire({
        title: "Good job!",
        text: "Formulaire deleted successefuly!",
        icon: "success"
      });
    },err=>{
      console.log(err)
    }
  )
}



  }

