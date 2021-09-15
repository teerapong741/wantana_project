import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  showSidebar: boolean = false;

  currentRoute: string = '';
  manageClothMenu: boolean = false;
  manageCustomerMenu: boolean = false;
  manageEmployeeMenu: boolean = false;
  manageDamagedClothMenu: boolean = false;
  manageClothTypeMenu: boolean = false;
  manageTypeUsedClothMenu: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.onToggleMenuFirstTime();
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const url = event.url;
        const urlSplit = url.split('/')[2];
        this.currentRoute = urlSplit;
        this.showSidebar = false;
      }
    });
  }

  onToggleMenuFirstTime(): void {
    const url = this.router.url;
    const menu = url.split('/')[2];
    this.onCloseMenuAll();
    if (menu === 'manage-cloth') {
      this.manageClothMenu = true;
    } else if (menu === 'manage-customer') {
      this.manageCustomerMenu = true;
    } else if (menu === 'manage-employee') {
      this.manageEmployeeMenu = true;
    } else if (menu === 'manage-damaged-cloth') {
      this.manageDamagedClothMenu = true;
    } else if (menu === 'manage-cloth-type') {
      this.manageClothTypeMenu = true;
    } else if (menu === 'manage-type-used-cloth') {
      this.manageTypeUsedClothMenu = true;
    } else if (menu === 'none') {
      this.onCloseMenuAll();
    } else {
      this.onCloseMenuAll();
    }
  }

  onToggleMenu(menu: string): void {
    this.onCloseMenuAll();
    if (menu === 'manage-cloth') {
      this.manageClothMenu = !this.manageClothMenu;
    } else if (menu === 'manage-customer') {
      this.manageCustomerMenu = !this.manageCustomerMenu;
    } else if (menu === 'manage-employee') {
      this.manageEmployeeMenu = !this.manageEmployeeMenu;
    } else if (menu === 'manage-damaged-cloth') {
      this.manageDamagedClothMenu = !this.manageDamagedClothMenu;
    } else if (menu === 'manage-cloth-type') {
      this.manageClothTypeMenu = !this.manageClothTypeMenu;
    } else if (menu === 'manage-type-used-cloth') {
      this.manageTypeUsedClothMenu = !this.manageTypeUsedClothMenu;
    } else if (menu === 'none') {
      this.onCloseMenuAll();
    } else {
      this.onCloseMenuAll();
    }
  }

  onCloseMenuAll(): void {
    this.manageClothMenu = false;
    this.manageCustomerMenu = false;
    this.manageEmployeeMenu = false;
    this.manageDamagedClothMenu = false;
    this.manageClothTypeMenu = false;
    this.manageTypeUsedClothMenu = false;
  }
}
