import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

//Import all material modules
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FullComponent } from './presentation/layouts/full/full.component';
import { BlankComponent } from './presentation/layouts/blank/blank.component';
import { HeaderComponent } from './presentation/layouts/full/header/header.component';
import { BrandingComponent } from './presentation/layouts/full/sidebar/branding.component';
import { AppNavItemComponent } from './presentation/layouts/full/sidebar/nav-item/nav-item.component';
import { SidebarComponent } from './presentation/layouts/full/sidebar/sidebar.component';
import { ToastrModule } from 'ngx-toastr';
import { CoreModule } from './core/core.module';
import { PersistenceModule } from './infrastructure/persistence/persistence-module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { LoaderModule } from './infrastructure/Utils/Loader/loader.module';

//Import Layouts

// Vertical Layout

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    SidebarComponent,
    HeaderComponent,
    BrandingComponent,
    AppNavItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
    NgScrollbarModule,
    InfrastructureModule,
    ToastrModule.forRoot({
      timeOut: 15000, // 15 seconds
      closeButton: true,
      progressBar: true,
      iconClasses : {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning',
      },
      positionClass: 'toast-top-left',
    }),
    CoreModule,
    LoaderModule
  ],
  exports: [TablerIconsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
