import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component.ts';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'contact', component: ContactComponent }
  ])],
  exports: [RouterModule]
})
export class ContactRoutingModule {}
