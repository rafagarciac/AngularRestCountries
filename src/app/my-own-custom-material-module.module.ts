import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';





@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatMenuModule,
    MatGridListModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatTabsModule, 
    MatCardModule,
    MatMenuModule,
    MatGridListModule
  ],
  declarations: []
})
export class MyOwnCustomMaterialModuleModule { }
