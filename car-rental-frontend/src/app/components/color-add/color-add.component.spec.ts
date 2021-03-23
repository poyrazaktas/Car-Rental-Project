import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorAddComponent } from './color-add.component';

describe('ColorAddComponent', () => {
  let component: ColorAddComponent;
  let fixture: ComponentFixture<ColorAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
