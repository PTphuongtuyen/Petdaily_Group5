import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HscnComponent } from './hscn.component';

describe('HscnComponent', () => {
  let component: HscnComponent;
  let fixture: ComponentFixture<HscnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HscnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HscnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
