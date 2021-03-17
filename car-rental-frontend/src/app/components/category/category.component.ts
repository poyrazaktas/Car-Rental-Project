import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: string[] = ['Cars', 'Rentals', 'Colors', 'Brands', 'Customers'];
  currentCategory: string = 'cars';
  constructor() {}

  ngOnInit(): void {}

  setCurrentCategory(category: string) {
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category: string) {
    if (category == this.currentCategory) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
