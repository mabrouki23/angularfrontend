import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEvenementComponent } from './add-evenement/add-evenement.component';
import { ListEvenementComponent } from './list-evenement/list-evenement.component';

const routes: Routes = [
  {path: 'addevenement', component: AddEvenementComponent},
  {path: 'evenements', component: ListEvenementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
