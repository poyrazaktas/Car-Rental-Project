import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {LocalStorageService} from '../../services/local-storage.service';


@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  isAuthenticated: boolean;
  constructor(private authService: AuthService,
              public localStorageService: LocalStorageService
  ) {
  }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  // tslint:disable-next-line:typedef
  logOut() {
    this.localStorageService.removeToken();
    this.localStorageService.removeUser();

  }
}
