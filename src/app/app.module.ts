import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Main layout components
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MainLayoutHeaderComponent } from './layouts/main-layout/main-layout-header/main-layout-header.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ROOT_REDUCERS } from './store/app.state';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent, MainLayoutComponent, MainLayoutHeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
