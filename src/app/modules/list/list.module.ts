import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { TableComponent } from '../table/table.component';
import { TableModule } from '../table/table.module';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }
