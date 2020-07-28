import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { PartslistComponent } from './partslist/partslist.component';

const routes: Routes = [
  { path: "cars/create", component: CreateComponent },
  { path: "parts/", component: PartslistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { } export const RoutingComponent = [CreateComponent, PartslistComponent];