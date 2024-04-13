import { Component } from '@angular/core';
import { DapService } from './Dap.service';
import { StreamState } from 'src/app/core/domain/Interfaces/IStream.state';
import { dapDTO } from 'src/app/core/domain/Models/dapDTO';
import { productsData } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-dap',
  templateUrl: './dap.component.html',
  styleUrls: ['./dap.component.scss']
})

export class DapComponent {
  files: Array<any> = [];
   ELEMENT_DATA: productsData[] = [
    {
      id: 1,
      imagePath: 'assets/images/profile/user-1.jpg',
      uname: 'Mark J. Freeman',
      position: 'English',
      hourRate: 150,
      classes: 53,
      priority: 'Available',
    },
    {
      id: 2,
      imagePath: 'assets/images/profile/user-2.jpg',
      uname: 'Andrew McDownland',
      position: 'Project Manager',
      hourRate: 150,
      classes: 68,
      priority: 'In Class',
    },
    {
      id: 3,
      imagePath: 'assets/images/profile/user-3.jpg',
      uname: 'Christopher Jamil',
      position: 'Project Manager',
      hourRate: 150,
      classes: 94,
      priority: 'Absent',
    },
    {
      id: 4,
      imagePath: 'assets/images/profile/user-4.jpg',
      uname: 'Nirav Joshi',
      position: 'Frontend Engineer',
      hourRate: 150,
      classes: 27,
      priority: 'On Leave',
    },
  ];
  dataSource = this.ELEMENT_DATA;

  displayedColumns: string[] = ['Audio', 'Topic', 'Name', 'Type'];

  
  /**
   *
   */
  constructor(public dapService:DapService) {
      // get media files
      dapService.getFiles().subscribe((files:any) => {
        this.files = files;
      });
  }
}