import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evenement } from './model/evenement.model';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  private url = 'http://localhost:8080/api'
  constructor(private http:HttpClient) { }
  getAllEvenements():Observable<Evenement[]> {
    return this.http.get<Evenement[]>(this.url + '/evenements');
  }
  saveEvenement(body: any):Observable<Evenement> {
    
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
         });    
         let options = {headers: httpHeaders};        
          
    return this.http.post<Evenement>(this.url + '/evenements', body,options)

  }

}
