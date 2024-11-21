import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XemtbaoComponent } from './xemtbao.component';

describe('XemtbaoComponent', () => {
  let component: XemtbaoComponent;
  let fixture: ComponentFixture<XemtbaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XemtbaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XemtbaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
