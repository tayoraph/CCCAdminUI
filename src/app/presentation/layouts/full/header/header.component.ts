import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  showSideMenu = false;
  constructor(public dialog: MatDialog) {}

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
}
