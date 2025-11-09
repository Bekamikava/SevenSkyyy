import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { Floor1Component } from './floor1/floor1.component';
import { Floor2Component } from './floor2/floor2.component';
import { Floor3Component } from './floor3/floor3.component';
import { Floor4Component } from './floor4/floor4.component';
import { Floor5Component } from './floor5/floor5.component';
import { Floor6Component } from './floor6/floor6.component';
import { Floor7Component } from './floor7/floor7.component';
import { CommonModule } from '@angular/common';
import { MisamartiComponent } from './misamarti/misamarti.component';
import { ProeqtiComponent } from './proeqti/proeqti.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    Floor1Component,
    Floor2Component,
    Floor3Component,
    Floor4Component,
    Floor5Component,
    Floor6Component,
    Floor7Component,
    MisamartiComponent,
    ProeqtiComponent
  ],
  imports: [
    BrowserModule,
     CommonModule,   

    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
