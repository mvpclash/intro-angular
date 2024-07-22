import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import JsonPlaceHolderModel from 'src/app/models/jsonPlaceHolder.model';
import { JsonPlaceHolderServiceService } from 'src/app/services/json-place-holder-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public posts: JsonPlaceHolderModel[] = [] ;
  loginForm: FormGroup;

  constructor(private jsonPlaceHolderService: JsonPlaceHolderServiceService,
    private formBuilder : FormBuilder
    ) {
      this.loginForm = this
     }

  ngOnInit(): void {
    this.jsonPlaceHolderService.obtenerDatos().subscribe(
      (data) => {
        this.posts = data;
      }
    );
  }

}
