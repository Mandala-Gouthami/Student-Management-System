import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
// private baseUrl='http://localhost:3000/persons';
private baseUrl='http://localhost:8080/api/students/';
  constructor(private http: HttpClient) { }

  addPerson(personData: any){
    return this.http.post<any>(this.baseUrl, personData);
  }

  fetchData(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

}
