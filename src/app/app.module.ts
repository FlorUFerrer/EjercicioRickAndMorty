import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APIrickandmortyService } from './services/apirickandmorty.service';
import { RickandmortyComponent } from './views/rickandmorty/rickandmorty.component';

@NgModule({
  declarations: [
    AppComponent,
    RickandmortyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    APIrickandmortyService ,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
