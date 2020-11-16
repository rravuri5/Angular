import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url='http://localhost:8088/web';
  constructor(private http:HttpClient) { }

  getTeamDetails():Observable<any>{
    return this.http.get(this.url.concat("/teamdetails"))
  }
}
