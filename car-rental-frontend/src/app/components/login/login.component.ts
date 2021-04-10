import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {ToastrService} from 'ngx-toastr';
import {CustomerService} from '../../services/customer.service';
import {FindexService} from '../../services/findex.service';
import {Router} from '@angular/router';
import {LocalStorageService} from '../../services/local-storage.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private customerService: CustomerService,
              private findexService: FindexService,
              private localStorageService: LocalStorageService,
              private router: Router,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.createLoginForm();
  }

  // tslint:disable-next-line:typedef
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // tslint:disable-next-line:typedef
  login() {
    if (this.loginForm.valid) {
      const loginModel = Object.assign({}, this.loginForm.value);
      this.authService.login(loginModel).subscribe((response) => {
        this.localStorageService.setToken(response.data.token);
        this.findexService.customerFindexScore = this.findexService.getFindexScoreForCustomer();
        console.log('Kullanıcı findeks puanı: ' + this.findexService.customerFindexScore);
        this.toastrService.success('Giriş Başarılı');
        this.router.navigate(['cars']).then(r => {
          this.getCustomerByMail(loginModel.email);
        });
      }, error => {
        this.toastrService.error(error.error);

      });
    }
  }

  // tslint:disable-next-line:typedef
  getCustomerByMail(email: string) {
    this.customerService.getCustomerByMail(email).subscribe((response) => {
      this.customerService.setCurrentUser(response.data);
      this.localStorageService.setUser(response.data.firstName + ' ' + response.data.lastName);
    });
  }


}
