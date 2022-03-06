import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { ItemComponent } from './contactlist/item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [ContactlistComponent,ItemComponent],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule
  ],
  exports:[ContactlistComponent,ItemComponent]
})
export class ComponentsModule { }
