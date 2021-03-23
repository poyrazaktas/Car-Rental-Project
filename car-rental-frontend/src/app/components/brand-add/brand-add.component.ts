import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {BrandService} from '../../services/brand.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  brandAddForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private brandService: BrandService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.createBrandAddForm();
  }

  createBrandAddForm() {
    this.brandAddForm = this.formBuilder.group(
      {
        name: ['', Validators.required]
      }
    );
  }

  add() {
    if (this.brandAddForm.valid) {
      let brandModel = Object.assign({}, this.brandAddForm.value);
      this.brandService.addBrand(brandModel).subscribe((response) => {
        this.toastrService.success(response.message, 'Başarılı!');
      }, responseError => {
        this.toastrService.error(responseError.error.message);
      });
    }
  }

}
