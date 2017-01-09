import { NgModule }            from '@angular/core';
import { SharedModule }        from '../shared/shared.module';
//import { CoreModule } from '../core/core.module'; we could import CoreModulr because we'd imported in a root component

import { HeroComponent }       from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent }   from './hero-list.component';
import { HighlightDirective }  from './highlight.directive';
import { HeroRoutingModule }   from './hero-routing.module';

@NgModule({
  imports: [ SharedModule, HeroRoutingModule ],
  declarations: [
    HeroComponent, HeroDetailComponent, HeroListComponent,
    HighlightDirective
  ]
})
export class HeroModule { }
