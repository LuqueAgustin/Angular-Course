import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs";

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";


@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) { 
    }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://angular-recipe-book-ef254-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(response =>{
            console.log(response);
        });
    }

    fetchRecipes() {
        return this.http
            .get<Recipe[]>('https://angular-recipe-book-ef254-default-rtdb.firebaseio.com/recipes.json')
            .pipe(map(recipes => {
                return recipes.map(recipes => {
                    return {...recipes, ingredients: recipes.ingredients ? recipes.ingredients : []};
                })
            }),
            tap(recipes => {
                this.recipeService.setRecipes(recipes);
            })
            )
    }
}