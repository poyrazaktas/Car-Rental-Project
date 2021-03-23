import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandAddComponent } from './brand-add.component';

describe('BrandAddComponent', () => {
  let component: BrandAddComponent;
  let fixture: ComponentFixture<BrandAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
