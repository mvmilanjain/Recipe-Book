import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import "rxjs/add/operator/map";

import {AuthService} from "./auth.service";
import {RecipeService} from "./recipe.service";
import {Recipe} from "../models/recipe.model";

@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    return this.httpClient.put('https://mj-recipe-book.firebaseio.com/recipes.json', this.recipeService.getRecipes());

    /*const req = new HttpRequest('PUT', 'https://mj-recipe-book.firebaseio.com/recipes.json', this.recipeService.getRecipes(),
      {reportProgress: true, params: new HttpParams().set('auth', token)});
    return this.httpClient.request(req);*/
  }

  getRecipes() {
    this.httpClient.get<Recipe[]>('https://mj-recipe-book.firebaseio.com/recipes.json').map(recipes => {
      recipes.forEach((recipe: Recipe) => {
        if (!recipe['ingredients']) {
          recipe['ingredients'] = [];
        }
      });
      return recipes;
    }).subscribe(recipes => {
      if (recipes) {
        this.recipeService.setRecipes(recipes);
      }
    });
  }

}
