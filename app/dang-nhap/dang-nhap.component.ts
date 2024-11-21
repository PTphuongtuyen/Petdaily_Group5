import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router'
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import {UserService} from '../service/user.service'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dang-nhap',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,FormsModule,RouterModule],
  templateUrl: './dang-nhap.component.html',
  styleUrl: './dang-nhap.component.css'
})
export class DangNhapComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: UserService, private router: Router) { }

  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Response:', response); // Log phản hồi thành công
        this.authService.setToken(response.token);
        this.router.navigate(['/trangChu']);
      },
      error: (error) => {
        console.error('Lỗi đăng nhập:', error); // Log lỗi chi tiết
        alert('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin!');
      },
    });
  }
  navigateToRegister() {
    this.router.navigate(['/register']); // Chuyển sang trang đăng ký
}
navigatetoResetpass(){
  this.router.navigate(['/resetpass']); // chuyển sang trang quên mật khẩu
}
}
