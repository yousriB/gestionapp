import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

    private urlFormulaire = 'http://127.0.0.1:3000/formulaire/'; // Corrected URL
    private urlUser = 'http://127.0.0.1:3000/user/'; // Corrected URL
    private urlTablefinal = 'http://127.0.0.1:3000/tablefinal/'; // Corrected URL



  ////////////table final
  createTableFinal(Tablefinal:any){
    return this.http.post(this.urlTablefinal + 'add', Tablefinal);
  }
  getAllTableFinal(){
    return this.http.get(this.urlTablefinal + 'all');
  }
  ////////////formulaire
  createFormulaire(Formulaire:any){
    return this.http.post(this.urlFormulaire + 'add', Formulaire);
  }
  getFormulaireByIdUser(id:any){
    return this.http.get(this.urlFormulaire + 'getbyiduser/' + id );
  }

  getAllFormulaire(){
    return this.http.get(this.urlFormulaire + 'all');
  }
  getFormulaireById(id:any){
    return this.http.get(this.urlFormulaire + 'getbyid/' + id );
  }
  deleteAllFormulaire(){
    return this.http.delete(this.urlFormulaire + 'deleteall' );
  }
  ////////////user
  getAllUsers(){
    return this.http.get(this.urlUser + 'all');
  }
 
}
