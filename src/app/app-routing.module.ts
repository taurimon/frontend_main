import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BudgetService } from './budget.service';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'budget.service', component: BudgetService}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
