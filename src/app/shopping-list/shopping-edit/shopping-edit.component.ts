import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";
import {Store} from "@ngrx/store";

import {Ingredient} from "../../shared/models/ingredient.model";
import * as ShoppingListActions from "../store/shopping-list.actions";
import * as fromShoppingList from "../store/shopping-list.reducers";
import * as fromApp from "../../store/app.reducers";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItem: Ingredient;

  @ViewChild('f') slForm: NgForm;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.subscription = this.store.select('shoppingList').subscribe((data: fromShoppingList.State) => {
      if (data.editedIngredientIndex > -1) {
        this.editedItem = data.editedIngredient;
        this.editMode = true;
        this.slForm.setValue({
          name: this.editedItem.name,
          amount:this.editedItem.amount
        });
      } else {
        this.editMode = false;
      }
    });
  }

  onSubmit(form: NgForm) {
    const ingredient = new Ingredient(form.value.name, form.value.amount);
    if (this.editMode) {
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({
        ingredient: ingredient
      }));
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(ingredient));
    }
    this.onClear();
  }

  onDelete() {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }

  ngOnDestroy(): void {
    this.store.dispatch(new ShoppingListActions.StopEdit());
    this.subscription.unsubscribe();
  }

}
