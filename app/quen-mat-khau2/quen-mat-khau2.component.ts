import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-quen-mat-khau2',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './quen-mat-khau2.component.html',
  styleUrl: './quen-mat-khau2.component.css'
})
export class QuenMatKhau2Component {
  constructor(private router: Router) {}

  toCompleted(){
    this.router.navigate(['/'])
  }
}
