import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'forum',
    pathMatch: 'full',
  },
  {
    path: 'forum',
    loadChildren: './features/forum/forum.module#ForumModule',
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
