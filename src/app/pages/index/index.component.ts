import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import JsonPlaceHolderModel from 'src/app/models/jsonPlaceHolder.model';
import { JsonPlaceHolderServiceService } from 'src/app/services/json-place-holder-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
 
  loginForm! : FormGroup; 
  
  public posts: JsonPlaceHolderModel[] = [] ;
  

  constructor(
    private formBuilder : FormBuilder,
    private jsonPlaceHolderService: JsonPlaceHolderServiceService
    ) {}
    

  ngOnInit(): void {
    this.crearFormulario();
    this.jsonPlaceHolderService.obtenerDatos().subscribe(
      (data) => {
        this.posts = data;
      }
    );
  }

  login(){
    if(this.loginForm.valid){
      return alert('Ha hecho login');
    }
    return alert('Email o contraseña no cumple con las validaciones');
  }

  crearFormulario(){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email] ] ,
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

}
