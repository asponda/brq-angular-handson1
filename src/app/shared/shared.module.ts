import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyButtonComponent } from './components/my-button/my-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyButtonComponent],
  exports: [MyButtonComponent]
})
export class SharedModule { }
