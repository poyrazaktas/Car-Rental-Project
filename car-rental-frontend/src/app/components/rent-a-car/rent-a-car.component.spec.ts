import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentACarComponent } from './rent-a-car.component';

describe('RentACarComponent', () => {
  let component: RentACarComponent;
  let fixture: ComponentFixture<RentACarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentACarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentACarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
