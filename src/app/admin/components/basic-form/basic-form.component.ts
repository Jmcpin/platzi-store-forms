import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.nameField.valueChanges.subscribe(data => { //v6. Obtiene los valores de un input form control en tiempo real
      console.log(data);
    })
  }

  nameField = new FormControl('', [Validators.required, Validators.maxLength(10)]);
  emailField = new FormControl('');
  phoneField = new FormControl('');
  colorField = new FormControl('#000000');
  dateField = new FormControl('');
  numberField = new FormControl(12);
  categoryField = new FormControl('category-3');
  tagField = new FormControl('');
  agreeField = new FormControl(false);
  genderField = new FormControl('');//V8
  zoneField = new FormControl('');//V8

  monthField = new FormControl(''); //v7. ...
  passwordField = new FormControl('');
  priceField = new FormControl('50');
  weekField = new FormControl('');
  timefield = new FormControl('');
  searchField = new FormControl('');
  descriptionField = new FormControl('');

  getValueName(){ //v6. Obtiene los valores de un input form control cuando se ejecuta el evento en el boton
    console.log(this.nameField.value);
  }

  isNameFieldValid() {
    return this.nameField.touched && this.nameField.valid;
  }

  isNameFieldInvalid() {
    return this.nameField.touched && this.nameField.invalid;
  }

}
