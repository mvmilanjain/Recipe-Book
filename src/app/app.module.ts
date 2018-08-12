import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {AppRoutingModule} from "./app-routing.module";
import {AuthModule} from "./auth/auth.module";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    AuthModule,
    ShoppingListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
