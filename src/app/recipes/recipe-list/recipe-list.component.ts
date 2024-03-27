import { Component } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("Cake", "Not Real", "https://bakesbybrownsugar.com/wp-content/uploads/2021/04/Coconut-Cake-Ingredients-1-6.jpg")
  ];
}
