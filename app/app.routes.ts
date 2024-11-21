import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component';
import { DichVuComponent } from './dich-vu/dich-vu.component';
import { KhuyenMaiComponent } from './khuyen-mai/khuyen-mai.component';
import { LienHeComponent } from './lien-he/lien-he.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { DanhGiaComponent } from './danh-gia/danh-gia.component';
import { DatLichComponent } from './dat-lich/dat-lich.component';
import { TimKiemComponent } from './tim-kiem/tim-kiem.component';
import { CaNhanComponent } from './ca-nhan/ca-nhan.component';
import { TinTucChiTietComponent } from './tin-tuc-chi-tiet/tin-tuc-chi-tiet.component';
import { DichVuChiTietComponent } from './dich-vu-chi-tiet/dich-vu-chi-tiet.component';
import { GoiDichVuChiTietComponent } from './goi-dich-vu-chi-tiet/goi-dich-vu-chi-tiet.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { AuthGuard } from './guard/auth.user.guard';
import { HscnComponent } from './ca-nhan/hscn/hscn.component';
import { LsdlComponent } from './ca-nhan/lsdl/lsdl.component';
import { XemtbaoComponent } from './ca-nhan/xemtbao/xemtbao.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { QuenMatKhau1Component } from './quen-mat-khau1/quen-mat-khau1.component';
import { QuenMatKhau2Component } from './quen-mat-khau2/quen-mat-khau2.component';

export const routes: Routes = [
  { path: 'trangChu', component: TrangChuComponent },
  { path: 'gioiThieu', component: GioiThieuComponent },
  { path: 'dichVu', component: DichVuComponent},
  { path: 'dichVu/:maLinhVuc', component: DichVuChiTietComponent},
  { path: 'dichVu/:maLinhVuc/:maGoi', component: GoiDichVuChiTietComponent},
  { path: 'khuyenMai', component: KhuyenMaiComponent },
  { path: 'lienHe', component: LienHeComponent },
  { path: 'tinTuc', component: TinTucComponent },
  { path: 'tinTuc/:maTinTuc', component: TinTucChiTietComponent},
  { path: 'danhGia', component: DanhGiaComponent },
  { path: 'datLich', component: DatLichComponent },
  { path: 'timKiem', component: TimKiemComponent },
  { path: 'caNhan', component: CaNhanComponent , children:
    [{path: 'HoSoCaNhan', component: HscnComponent},
     {path: 'LichSuDatLich', component: LsdlComponent},
     {path: 'Xemthongbao', component: XemtbaoComponent},
     ]

  },
  {path:'login', component: DangNhapComponent},
  {path:'register', component:DangKyComponent},
  {path:'resetpass', component: QuenMatKhau1Component},
  {path:'resetpass#',component:QuenMatKhau2Component},
  { path: '', redirectTo: '/trangChu', pathMatch: 'full' },
  { path: '**', redirectTo: '/trangChu' } // Điều hướng wildcard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
