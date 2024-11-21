import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

      // API đăng ký người dùng
      registerUser(data: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/register`,data, 
          {headers: { 'Content-Type': 'application/json' }});
      }

  // Gọi API đăng nhập
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password });}

    // Lưu token vào localStorage
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Lấy token từ localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Xóa token khi đăng xuất
  logout(): void {
    localStorage.removeItem('token');
  }

  // Kiểm tra người dùng đã đăng nhập chưa
  isLoggedIn(): boolean {
    return !!this.getToken();}
}
