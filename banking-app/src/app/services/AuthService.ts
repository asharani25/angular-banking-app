import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
    public username: string;
    public password: string;

  constructor(private http: HttpClient,private router: Router) {

  }

  login(username: string, password: string): Observable<any>{
      let res= this.http.get(environment.hostUrl + `/home`,
      { 
        headers: {
           authorization: this.createBasicAuthToken(username, password)
        }
      });

      if(res){
        //this.gotoTransactionPage();
      }
      return res;
  }

  createBasicAuthToken(username: string, password: string) {
    console.log(window.btoa(username + ":" + password));
    return 'Basic ' + window.btoa(username + ":" + password);
  }

  gotoTransactionPage() {
    this.router.navigate(['/user-transactions']);
  }

  getTransactions(): Observable<any>{
    let res= this.http.get(environment.hostUrl + `/transactionDetails`);
    return res;
  }
}