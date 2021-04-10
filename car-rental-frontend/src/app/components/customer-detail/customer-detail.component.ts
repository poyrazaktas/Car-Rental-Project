import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {Customer} from '../../models/customer';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {LocalStorageService} from '../../services/local-storage.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer;
  userUpdateForm: FormGroup;
  customerUpdateForm: FormGroup;

  constructor(public customerService: CustomerService,
              private formBuilder: FormBuilder,
              private localStorageService: LocalStorageService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.customer = this.customerService.getCurrentUser();
    this.createUserUpdateForm();
    this.createCustomerUpdateForm();
  }

  createUserUpdateForm() {
    this.userUpdateForm = this.formBuilder.group({
      id: this.customer.userId,
      firstName: [this.customer.firstName, Validators.required],
      lastName: [this.customer.lastName, Validators.required],
      email: [this.customer.email, Validators.required],
      password: ['', Validators.required]
    });
  }

  // tslint:disable-next-line:typedef
  createCustomerUpdateForm() {
    this.customerUpdateForm = this.formBuilder.group({
      id: this.customer.customerId,
      userId: this.customer.userId,
      companyName: [this.customer.companyName, Validators.required]
    });
  }

  // tslint:disable-next-line:typedef
  update() {
    this.updateUser();
    this.updateCustomer();
  }

  // tslint:disable-next-line:typedef
  updateUser() {
    const userModel = Object.assign({}, this.userUpdateForm.value);
    this.customerService.updateUser(userModel).subscribe((response) => {
      this.localStorageService.setUser(userModel.firstName + ' ' + userModel.lastName);
      this.toastrService.success(response.message, 'Kullanıcı güncellemesi başarılı!');
    }, responseError => {
      this.toastrService.error(responseError.error.message);
    });
  }

  // tslint:disable-next-line:typedef
  updateCustomer() {
    const customerModel = Object.assign({}, this.customerUpdateForm.value);
    this.customerService.updateCustomer(customerModel).subscribe((response) => {
      this.toastrService.success(response.message, 'Şirket güncellemesi başarılı!');
    }, responseError => {
      this.toastrService.error(responseError.error.message);
    });
  }

}
