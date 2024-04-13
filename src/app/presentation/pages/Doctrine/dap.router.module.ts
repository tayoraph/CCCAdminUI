import { Routes } from '@angular/router';
import { DapComponent } from './dap/dap.component';
import { DapMenuComponent } from './dap-menu/dap-menu.component';

export const DapRoutes: Routes = [
  {
    path: 'dapAudio',
    component: DapComponent,
    data: {
      title: 'Doctrine and Power',
    },
  },
  {
    path: '',
    component: DapMenuComponent,
    data: {
      title: 'Doctrine and Power Menu',
    },
  },
];
