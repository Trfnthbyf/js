import { NgModule } from '@angular/core';
import { SharedModule }        from '../shared/shared.module';

import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact.service';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  declarations: [
    ContactComponent,
  ],
  imports: [
    SharedModule,
    ContactRoutingModule
  ],
  providers: [
    ContactService
  ],
  exports: [ ContactComponent ]
})
export class ContactModule { }

