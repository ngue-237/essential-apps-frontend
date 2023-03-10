import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParamCultureRoutingModule } from './param-culture-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    ParamCultureRoutingModule
  ]
})
export class ParamCultureModule { }
