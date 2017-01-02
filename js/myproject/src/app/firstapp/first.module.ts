import { CommonModule }      from '@angular/common';
import { NgModule } from '@angular/core';

import { ArticleComponent } from './article/article.component';
import { VoteComponent } from './vote/vote.component';

@NgModule({
  declarations: [
    ArticleComponent,
    VoteComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [ArticleComponent, VoteComponent]
})
export class FirstModule { }
