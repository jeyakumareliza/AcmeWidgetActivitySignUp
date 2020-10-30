import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { HttpClientModule } from '@angular/common/http';
import { InterestedPersonsListComponent } from './components/interested-persons-list/interested-persons-list.component';
import { EmailValidatorDirective } from './shared/email-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    InterestedPersonsListComponent,
    EmailValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
