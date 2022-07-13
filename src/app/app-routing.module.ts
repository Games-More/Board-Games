import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheMindComponent } from "../games/the-Mind/the-Mind.component";

const routes: Routes = [{path:'the-Mind',component:TheMindComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
