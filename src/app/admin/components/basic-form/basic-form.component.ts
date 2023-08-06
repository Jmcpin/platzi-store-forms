import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildFormm();// Lo que hace es mandar a llamar la funcion buildFormm
                      // para que se inicialice el formulario
  }

  ngOnInit(): void {
    /*this.nameField.valueChanges.subscribe(data => { //v6. Obtiene los valores de un input form control en tiempo real
      console.log(data);
    });*/
    /*this.formulario.valueChanges.subscribe(values => {
      console.log(values);// se suscribe el formulario y escucha todos los inputs
    })*/
  }

  private buildFormm() {
    this.formulario = this.formBuilder.group({
      fullname:  this.formBuilder.group({
        namee: ['',[Validators.required, Validators.maxLength(10), Validators.pattern(/^[Aa-zA-ZáéíóúÁÉÍÓÚÑñ ]+$/)]],
        last: ['',[Validators.required, Validators.maxLength(10), Validators.pattern(/^[Aa-zA-ZáéíóúÁÉÍÓÚÑñ ]+$/)]]
      }),
      email: ['',[Validators.required, Validators.email]],
      phone: ['', Validators.required],
      color: ['#000000'],
      date: [''],
      age: [18, [Validators.required, Validators.min(18), Validators.max(100)]],
      category: ['category-3', Validators.required],
      tag: [''],
      agree: [false, Validators.requiredTrue],
      gender: [''],
      zone: [''],
    });
  }

  /*
  formulario = new FormGroup ({
    namee: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    email: new FormControl(''),
    phone: new FormControl(''),
    color: new FormControl('#000000'),
    date: new FormControl(''),
    age: new FormControl(12),
    category: new FormControl('category-3'),
    tag: new FormControl(''),
    agree: new FormControl(false),
    gender: new FormControl(''),//V8
    zone: new FormControl(''),//V8
  });
  */

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

  save(event: Event){
		if (this.formulario.valid) {
      console.log(this.formulario.value);
     } else {
      this.formulario.markAllAsTouched();
      //lo que hace es que va a tocar todos los inputs del formulario
      //para que se activen las codiciones de los mensajes
      //de los valid y invalid
     }
  }

  get nameField() {
    return this.formulario.get('fullname.namee');
  }

  get lastField() {
    return this.formulario.get('fullname.last');
  }

  get isNameFieldValid() {
    return this.nameField.touched && this.nameField.valid;
  }

  get isNameFieldInvalid() {
    return this.nameField.touched && this.nameField.invalid;
  }

  get emailField() {
    return this.formulario.get('email');
  }

  get phoneField() {
    return this.formulario.get('phone');
  }

  get colorField() {
    return this.formulario.get('color');
  }

  get dateField() {
    return this.formulario.get('date');
  }

  get ageField() {
    return this.formulario.get('age');
  }

  get categoryField() {
    return this.formulario.get('category');
  }

  get tagField() {
    return this.formulario.get('tag');
  }

  get agreeField() {
    return this.formulario.get('agree');
  }

  get genderField() {
    return this.formulario.get('gender');
  }

  get zoneField() {
    return this.formulario.get('zone');
  }

}
