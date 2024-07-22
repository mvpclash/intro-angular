import { Component, Input, OnInit } from '@angular/core';
import JsonPlaceHolderModel from 'src/app/models/jsonPlaceHolder.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  
  @Input() articulo: JsonPlaceHolderModel = {
    userId: 0,
    id: 0,
    title: "",
    body: ""
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
