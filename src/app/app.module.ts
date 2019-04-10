import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlatGridComponent } from './flatgrid/flatgrid.component';
import { IgxGridModule } from 'igniteui-angular';
import { GroupedGridComponent } from './groupedgrid/groupedgrid.component';

@NgModule({
  declarations: [
    AppComponent,
    FlatGridComponent,
    GroupedGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
