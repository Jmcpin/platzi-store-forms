import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';
import { Category } from './../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  urlApi = `${environment.url_api}`

  constructor(
    private httpp: HttpClient
  ) { }

  getAllCategories(){
    return this.httpp.get<Category[]>(`${this.urlApi}/categories/`);
    // al colocar <Category[]> le estoy indicando que me devuelva un array de categorias
  }

  createCategory(data: Partial<Category>){// El metodo de createCateory debemos recibir el nombre y la imagen,
    // entonces vamos a decirle que vamos a recibir una parte (con el comando "Partial" de typescript)
    // que vamos a recibir una parte que es la categoria, para que el id no nos lo coloque como obligatorio
    return this.httpp.post<Category>(`${this.urlApi}/categories`, data);
  }

  updateCategory(id: string, data: Partial<Category>){// Lo que hace "Partial" es poner todos los campos opcionales del modelo Category
    //Esto hace que se pueda enviar los datos que se requieran sin ser obligatorios lo demás campos
    return this.httpp.put<Category>(`${this.urlApi}/categories/${id}`, data);
  }
}
