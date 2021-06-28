import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer, UserFacade } from './store';

@NgModule({
  imports: [BrowserModule, FormsModule, StoreModule.forRoot(rootReducer)],
  providers: [UserFacade],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
