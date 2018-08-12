import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";

import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {AuthGuard} from "./shared/services/auth-guard.service";
import {HomeComponent} from "./core/home/home.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canActivate: [AuthGuard]},
  {path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
