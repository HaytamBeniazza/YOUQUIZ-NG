import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  getElements(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/level`)
  }
  getSubjectElements(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/subject`)
  }
  getAnswerElemets(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/response`)
  }
  getMediaElemets(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/media`)
  }
  getQuestionElemets(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/question`)
  }

  // Level CRUD

  addLevel(newLevel: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/level`, newLevel);
  }

  editLevel(levelId: number, updatedLevel: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/level/${levelId}`, updatedLevel);
  }

  getLevelById(levelId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/level/${levelId}`);
  }

  deleteLevel(levelId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/levels/${levelId}`);
  }

  // Answer CRUD

  addAnswer(newAnswer: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/response`, newAnswer);
  }
}
