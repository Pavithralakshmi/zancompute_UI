import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {createComponent} from "@angular/compiler/src/core";
import {CreateTheameComponent} from "./theame/create-theame/create-theame.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'theame',component:CreateTheameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
