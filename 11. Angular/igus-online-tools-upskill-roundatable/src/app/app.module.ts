import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { SharedModule } from './modules/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    SharedModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


