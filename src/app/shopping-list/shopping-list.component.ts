import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";

import {Ingredient} from "../shared/models/ingredient.model";
import * as fromShoppingList from "./ngrx-store/shopping-list.reducers";
import * as ShoppingListActions from "./ngrx-store/shopping-list.actions";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ ingredients: Ingredient[] }>;

  constructor(private store: Store<fromShoppingList.AppState>) {
  }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
  }

  onEditItem(id: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(id));
  }

}
