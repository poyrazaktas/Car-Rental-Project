import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {ColorService} from '../../services/color.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  colorAddForm: FormGroup;

  constructor(private colorService: ColorService, private formBuilder: FormBuilder,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.createColorAddForm();
  }

  createColorAddForm() {
    this.colorAddForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  add() {
    let colorModel = Object.assign({}, this.colorAddForm.value);
    this.colorService.addColor(colorModel).subscribe((response) => {
      this.toastrService.success(response.message, 'Başarılı!');
    }, responseError => {
      this.toastrService.error(responseError.error.message);
    });
  }
}
