import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactlistComponent } from './componentes/contactlist/contactlist.component';
import { ComponentsModule } from './componentes/components.module';

@NgModule({
  declarations: [
    AppComponent,    
    
  ],
  imports: [
    BrowserModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
