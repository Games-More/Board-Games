import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheMindComponent } from "../games/the-Mind/the-Mind.component";
import { MenuComponent } from "../app/menu/menu.component";

const routes: Routes = [
  {path:'',component:MenuComponent},
  {path:'menu',component:MenuComponent},
  {path:'the-Mind',component:TheMindComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
