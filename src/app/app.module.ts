import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ListBreedsComponent } from './common/components/list-breeds/list-breeds.component';
import { SideBarComponent } from './common/components/side-bar/side-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchBreedComponent } from './common/components/list-breeds/search-breed/search-breed.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBreedsComponent,
    SideBarComponent,
    SearchBreedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgScrollbarModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
