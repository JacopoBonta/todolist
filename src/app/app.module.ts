import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' // ineeded for [(ngModel)]


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { NewItemComponent } from './new-item/new-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    NewItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // ineeded for [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
