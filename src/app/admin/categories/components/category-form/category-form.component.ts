import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CategoriesService } from './../../../../core/services/categories.service';
import { Router } from '@angular/router';
import {} from './../categories/categories.component'

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private router: Router
  ) {
    this.builderFormm();
   }

  ngOnInit(): void {
  }

  private builderFormm(){
    this.formulario = this.formBuilder.group({
      name: ['',Validators.required],
      image: ['',Validators.required]
    });
  }

  public save(){
    if(this.formulario.valid){
      this.createCategory();
    }else {
      this.formulario.markAllAsTouched;
    }
  }

  private createCategory(){
    const data = this.formulario.value;
    this.categoriesService.createCategory(data).subscribe(rta => {
      console.log(rta);
      this.router.navigate(['./admin/categories']);
    })
  }

  get nameField(){
    return this.formulario.get('name');
  }

  get imageField(){
    return this.formulario.get('image');
  }

}
