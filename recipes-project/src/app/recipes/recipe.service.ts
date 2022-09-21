import { Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";


@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    //private recipes: Recipe[] = [
    //    new Recipe(
    //        'Combo Breaker Burger', 
    //        'Simple but Letal!', 
    //        'https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962997_1280.jpg',
    //        [
    //            new Ingredient('Buns', 1),
    //            new Ingredient('Pickles', 1),
    //            new Ingredient('Cheese', 2),
    //            new Ingredient('Red Onion', 1),
    //            new Ingredient('Bacon', 4),
    //            new Ingredient('Tomato', 1),
    //           new Ingredient('Meat', 2),
    //            new Ingredient('Mustard', 1),
    //            new Ingredient('Lettuce', 1),
    //            new Ingredient('French Fries', 20),
    //            
    //        ]),
    //    new Recipe(
    //        'Pork Schnitzel with Lemon', 
    //        'Even cooler with some fries on the side!', 
    //        'https://cdn.pixabay.com/photo/2018/03/31/19/31/schnitzel-3279055_1280.jpg',
    //        [
    //            new Ingredient('Pork Meat', 1),
    //            new Ingredient('French Fries', 20),
    //            new Ingredient('Lemon', 2),
    //            new Ingredient('Bread Crumbs', 1),
    //            new Ingredient('Eggs', 2),
    //        ]
    //    )
    //];

    private recipes: Recipe[] = []

    constructor(private shoppingListService: ShoppingListService) {}

    setRecipes(recipes : Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice())
    }
    
    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice())
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice())
    }
}