import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ColorChangeDirective } from './app.directive';
import { Directive } from './directive.app.ts/directive.ts/directive.ts.component';

@NgModule({
  declarations: [
    AppComponent,
    Directive.TsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
