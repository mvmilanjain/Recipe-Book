import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {AuthGuard} from "../shared/services/auth-guard.service";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipesComponent} from "./recipes.component";

const recipesRoutes: Routes = [
  {
    path: '', component: RecipesComponent, canActivate: [AuthGuard], children: [
    {path: '', component: RecipeStartComponent, canActivate: [AuthGuard]},
    {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
    {path: ':id', component: RecipeDetailComponent, canActivate: [AuthGuard]},
    {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
  ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
