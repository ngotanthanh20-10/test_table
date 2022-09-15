import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './modules/list/list.component';
import { ListModule } from './modules/list/list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
