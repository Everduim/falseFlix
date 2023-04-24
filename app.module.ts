import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { FilmsComponent } from './films/films.component';
import { CarouselComponent } from './Carousel/carousel/carousel.component';
import { Top10Component } from './top10/top10.component';
import { FooterComponent } from './app/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    FilmsComponent,
    CarouselComponent,
    Top10Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
