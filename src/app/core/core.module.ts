import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BearCardComponent } from './bear-card/bear-card.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BearCardComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    BearCardComponent,
    SearchComponent
  ]
})
export class CoreModule { }
