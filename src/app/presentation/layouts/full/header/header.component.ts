import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  showFiller = false;
  showSideMenu = true;
  constructor(public dialog: MatDialog, public router: Router) {}

  ngOnInit(): void {
    this.getcurrentUrl();
  }

  getcurrentUrl(){
    let url = window.location.href;
    environment.excemptedUrlArray.forEach(element => {
      if(url.indexOf(element) !== -1){
        this.showSideMenu = false;
      }
    });
  }
  logout(){
    this.router.navigate(["authentication/login"])
    window.location.href= ""
  }
}
