import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorUpdateComponent } from './color-update.component';

describe('ColorUpdateComponent', () => {
  let component: ColorUpdateComponent;
  let fixture: ComponentFixture<ColorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
