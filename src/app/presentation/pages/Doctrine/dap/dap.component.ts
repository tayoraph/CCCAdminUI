import { Component, ViewChild } from '@angular/core';
import { DapService } from './Dap.service';
import { StreamState } from 'src/app/core/domain/Interfaces/IStream.state';
import { dapDTO } from 'src/app/core/domain/Models/dapDTO';
import { productsData } from '../../dashboard/dashboard.component';
import { MatPaginator } from '@angular/material/paginator';
import { merge, of } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-dap',
  templateUrl: './dap.component.html',
  styleUrls: ['./dap.component.scss']
})

export class DapComponent {
  files: Array<any> = [];

  dataSource!: MatTableDataSource<any> ;
  dataSize: number = 0;
  displayedColumns: string[] = ['Audio', 'Topic', 'Name', 'Type'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  
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
    this.files = files;
    this.dataSource = new MatTableDataSource(this.files);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  });
  }


}