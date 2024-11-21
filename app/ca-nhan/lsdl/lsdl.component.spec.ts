import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsdlComponent } from './lsdl.component';

describe('LsdlComponent', () => {
  let component: LsdlComponent;
  let fixture: ComponentFixture<LsdlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LsdlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LsdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
