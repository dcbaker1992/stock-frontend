import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FundsService {

  constructor(private http: HttpClient) { }

  listFunds(){
    return this.http.get('http://localhost:8082/api/funds')
  }

  viewFunds(id: String){
    return this.http.get('http://localhost:8082/api/funds/'+ id)
  }

  createFund(fund: any){
    return this.http.post('http://localhost:8082/api/funds', fund)
  }
  deleteFund(id: any){
    return this.http.delete('http://localhost:8082/api/funds/'+ id)
  }
  updateFund(id: any, fund: any){
      return this.http.put('http://localhost:8082/api/funds/' + id , fund)
    }
}
