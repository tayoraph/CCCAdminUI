import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './presentation/layouts/blank/blank.component';
import { FullComponent } from './presentation/layouts/full/full.component';
import { authGuard } from './infrastructure/Utils/Guard/AuthGuard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: '',
        redirectTo: 'authentication/login',
        pathMatch: 'full',
      },
      {
        path: 'authentication',
        loadChildren: () =>
          import('./presentation/pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
  {
    path: 'app',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./presentation/pages/pages.module').then((m) => m.PagesModule),
          canActivate: [authGuard]
      },
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./presentation/pages/ui-components/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./presentation/pages/extra/extra.module').then((m) => m.ExtraModule),
      },
      {
        path: 'dap',
        loadChildren: () =>
          import('./presentation/pages/Doctrine/doctrine.module').then(
            (m) => m.DoctrineModule
          ),
      },
    ],
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
