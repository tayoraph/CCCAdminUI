import { Routes } from '@angular/router';
import { DapComponent } from './dap/dap.component';

export const DapRoutes: Routes = [
  {
    path: '',
    component: DapComponent,
    data: {
      title: 'Doctrine and Power',
    },
  },
];
