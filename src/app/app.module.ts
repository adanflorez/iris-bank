import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Main layout components
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MainLayoutHeaderComponent } from './layouts/main-layout/main-layout-header/main-layout-header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainLayoutHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
