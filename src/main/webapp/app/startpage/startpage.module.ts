import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StartpageComponent } from './startpage.component';
import { startpageState } from './startpage.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(startpageState)
  ],
  declarations: [StartpageComponent]
})
export class StartpageModule { }
