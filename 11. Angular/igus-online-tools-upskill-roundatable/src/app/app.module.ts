import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HideAfterDirective } from './directive/hide-after.directive';
import { PostsComponent } from './components/posts/posts.component';
import { IfForDirective } from './directive/if-for.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    HideAfterDirective,
    PostsComponent,
    IfForDirective


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  exports: [IfForDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
