import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { MainForumComponent } from './main-forum/main-forum.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ForumRoutingModule,
    SharedModule,
  ],
  declarations: [MainForumComponent]
})
export class ForumModule { }
