import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ColorService} from '../../services/color.service';
import {ToastrService} from 'ngx-toastr';
import {Color} from '../../models/color';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  colorUpdateForm: FormGroup;
  currentColor: Color;

  constructor(private colorService: ColorService, private formBuilder: FormBuilder,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.currentColor = this.getCurrentColor();

    this.createColorUpdateForm();
  }

  createColorUpdateForm() {
    this.colorUpdateForm = this.formBuilder.group({
      id: this.currentColor.id,
      name: ['', Validators.required]
    });
  }

  update() {
    let colorModel = Object.assign({}, this.colorUpdateForm.value);
    this.colorService.updateColor(colorModel).subscribe((response) => {
      this.toastrService.success(response.message, 'Başarılı!');
    }, responseError => {
      this.toastrService.error(responseError.error.message);
    });
  }

  getCurrentColor() {
    return this.colorService.getCurrentColor();
  }
}
