import { Component, OnInit } from '@angular/core';
import { navItems, navItemsOpen } from './sidebar-data';
import { NavService } from 'src/app/infrastructure/services/nav.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  navItems = navItems;
  showSideMenu = false;
  constructor(public navService: NavService) {}

  ngOnInit(): void {
    this.getcurrentUrl();
  }

  getcurrentUrl(){
    let url = window.location.href;
    environment.excemptedUrlArray.forEach(element => {
      if(url.indexOf(element) !== -1){
        this.showSideMenu = false;
        if(!this.showSideMenu)
          this.navItems = navItemsOpen
      }
    });
  }
}
