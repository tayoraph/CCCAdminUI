import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { DapComponent } from "./dap/dap.component";
import { CommonModule } from "@angular/common";
import { DapService } from "./dap/Dap.service";
import { RouterModule } from "@angular/router";
import { DapRoutes } from "./dap.router.module";

// import { MaterialModule } from "src/app/material.module";
import {  MatIconModule}  from '@angular/material/icon';
import { MatToolbarModule } from "@angular/material/toolbar"; 
import { MatSliderModule } from "@angular/material/slider"; 
import { MatListModule } from "@angular/material/list"; 
import { MatCardModule } from "@angular/material/card"; 
import { MatButtonModule } from "@angular/material/button"; 
import { MaterialModule } from "src/app/material.module";
import { TablerIconsModule } from "angular-tabler-icons";
import * as TablerIcons from 'angular-tabler-icons/icons';
import { DapMenuComponent } from "./dap-menu/dap-menu.component";

const MatModules = [
    MatButtonModule,
    MatListModule,
    // MatSliderModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule
];

@NgModule({
    imports:[CommonModule,
        RouterModule.forChild(DapRoutes),
        // MatModules
        MaterialModule,
        
    TablerIconsModule.pick(TablerIcons),
    ],
    declarations:[DapComponent,DapMenuComponent],
    providers:[DapService],
    exports:[
        // MatModules,
    MaterialModule
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class DoctrineModule{}