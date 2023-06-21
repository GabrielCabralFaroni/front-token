import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private apiUrl = 'http://localhost/apitoken/auth.php';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.apiUrl, { username, password });
  }

  
}
