import {Component} from '@angular/core';

import {DataStorageService} from "../../shared/services/data-storage.service";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {
  }

  onSaveData(): void {
    this.dataStorageService.storeRecipes().subscribe(res => {
      console.log(res);
    });
  }

  onFetchData(): void {
    this.dataStorageService.getRecipes();
  }

  onLogout(): void {
    this.authService.logout();
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

}
