import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {SharedModule} from "../shared/shared.module";
import {AppRoutingModule} from "../app-routing.module";
import {AuthGuard} from "../shared/services/auth-guard.service";
import {AuthService} from "../shared/services/auth.service";
import {DataStorageService} from "../shared/services/data-storage.service";
import {RecipeService} from "../shared/services/recipe.service";
import {ShoppingListService} from "../shared/services/shopping-list.service";
import {AuthInterceptor} from "../shared/interceptor/auth.interceptor";
import {LoggingInterceptor} from "../shared/interceptor/logging.interceptor";

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService,
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
  ]
})
export class CoreModule {
}
