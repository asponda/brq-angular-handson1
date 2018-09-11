import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss']
})
export class MyButtonComponent implements OnInit {

  @Input() label: string;

  @Output() nossoClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // Evento click natido do elemento button do html
  onClickButton() {
    this.nossoClick.emit();
  }

}
