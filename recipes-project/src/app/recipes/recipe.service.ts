import { EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is simple a test', 'https://cdn.pixabay.com/photo/2015/04/29/19/33/cookbook-746005_1280.jpg'),
        new Recipe('Another test recipe', 'This is simple a test', 'https://cdn.pixabay.com/photo/2015/04/29/19/33/cookbook-746005_1280.jpg')
      ];

    getRecipes() {
        return this.recipes.slice();
    }
    
}