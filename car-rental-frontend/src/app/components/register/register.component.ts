import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {CustomerService} from '../../services/customer.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {LocalStorageService} from '../../services/local-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private customerService: CustomerService,
              private localStorageService: LocalStorageService,
              private router: Router,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  // tslint:disable-next-line:typedef
  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // tslint:disable-next-line:typedef
  register() {
    if (this.registerForm.valid) {
      const registerModel = Object.assign({}, this.registerForm.value);
      this.authService.register(registerModel).subscribe((response) => {
        this.localStorageService.setToken(response.data.token);
        this.toastrService.success('Kayıt Başarılı!');
        this.router.navigate(['login']).then(r => this.toastrService.info('Lütfen, giriş yapınız!'));
      }, error => {
        this.toastrService.error(error.error);
      });
    }
  }

}
