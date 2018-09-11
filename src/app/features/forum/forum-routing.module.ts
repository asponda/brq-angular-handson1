import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainForumComponent } from './main-forum/main-forum.component';

const routes: Routes = [
  {
    path: '',
    component: MainForumComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
