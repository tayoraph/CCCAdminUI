import { Component } from '@angular/core';
import { DapService } from './Dap.service';
import { StreamState } from 'src/app/core/domain/Interfaces/IStream.state';

@Component({
  selector: 'app-dap',
  templateUrl: './dap.component.html',
  styleUrls: ['./dap.component.scss']
})
export class DapComponent {
  files: Array<any> = [];
  state!: StreamState;
  currentFile: any = {};

  /**
   *
   */
  constructor(public dapService:DapService) {
    
      // get media files
      dapService.getFiles().subscribe((files:any) => {
        this.files = files;
      });
  
      // listen to stream state
      this.dapService.getState().subscribe(state => {
        this.state = state;
      });
  }
}