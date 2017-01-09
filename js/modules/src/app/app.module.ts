import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }         from '@angular/forms';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ContactModule } from './contact/contact.module';
import { AppRoutingModule } from './app-routing.module';

import { MessagesModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { PasswordModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ContactModule,
    AppRoutingModule,
    CoreModule,
    ButtonModule,
    MessagesModule,
    InputTextModule,
    PasswordModule,
    DataTableModule,
    SharedModule,
    DialogModule,
    DropdownModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
