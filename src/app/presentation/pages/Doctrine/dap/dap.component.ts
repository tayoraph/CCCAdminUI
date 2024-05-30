import { Component, ViewChild } from '@angular/core';
import { DapService } from './Dap.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-dap',
  templateUrl: './dap.component.html',
  styleUrls: ['./dap.component.scss']
})

export class DapComponent {
  files: Array<any> = [];

  dataSource!: MatTableDataSource<any> ;
  dataSize: number = 0;
  displayedColumns: string[] = ['S/N','Audio', 'Topic', 'Name', 'Type'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  
  /**
   *
   */
  constructor(public dapService:DapService) {
    
  }

  ngOnInit() {
    this.getDapFiles();// get media files 
  
  }

  getDapFiles(){
  // get media files
    this.dapService.getFiles().subscribe((files:any) => {
      this.dataSize = this.files.length;
      this.files = files.reverse();
      this.dataSource = new MatTableDataSource(this.files);
      this.dataSource.paginator = this.paginator;

    });
  }


}