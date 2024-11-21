import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-quen-mat-khau1',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './quen-mat-khau1.component.html',
  styleUrl: './quen-mat-khau1.component.css'
})
export class QuenMatKhau1Component {
  constructor( private router : Router){}


  toResetpass(){
    this.router.navigate(['/resetpass#'])
  }
}
