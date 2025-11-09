import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Floor1Component } from './floor1/floor1.component';
import { Floor2Component } from './floor2/floor2.component';
import { Floor3Component } from './floor3/floor3.component';
import { Floor4Component } from './floor4/floor4.component';
import { Floor7Component } from './floor7/floor7.component';
import { Floor6Component } from './floor6/floor6.component';
import { Floor5Component } from './floor5/floor5.component';
import { MisamartiComponent } from './misamarti/misamarti.component';
import { ProeqtiComponent } from './proeqti/proeqti.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'floor1', component: Floor1Component },
   { path: 'floor2', component: Floor2Component },
  { path: 'floor3', component: Floor3Component },
  { path: 'floor4', component: Floor4Component },
  { path: 'floor5', component: Floor5Component },
  { path: 'floor6', component: Floor6Component },
  { path: 'floor7', component: Floor7Component },
  {path:'location',component:MisamartiComponent},
  {path:'project' ,component:ProeqtiComponent},
   
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',  // ახალი component-ზე scroll automatically top-ზე გადადის
    anchorScrolling: 'enabled'         // თუ აქვს #anchor, scroll ავტო-მოთავსება
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
