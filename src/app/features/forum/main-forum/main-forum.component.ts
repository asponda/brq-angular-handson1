import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-forum',
  templateUrl: './main-forum.component.html',
  styleUrls: ['./main-forum.component.scss']
})
export class MainForumComponent implements OnInit {

  contador = 0;

  constructor() { }

  ngOnInit() {
  }

  // Click do nosso botão
  mainForumButtonClick() {
    this.contador++;
  }

}
