import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './../../../../core/services/categories.service';
import { Category } from './../../../../core/models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  listCategory!: Category[];
  displayedColumns: string[] = ['id', 'name', 'image'];

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe(rta => {
      this.listCategory = rta;
      //console.log("Categorias: ",this.listCategory);
    })
  }

}
