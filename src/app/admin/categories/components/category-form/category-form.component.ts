import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder
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
    console.log(this.formulario);
  }

  get nameField(){
    return this.formulario.get('name');
  }

  get imageField(){
    return this.formulario.get('image');
  }

}
