import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExpenseOverviewComponent } from './expense-overview/expense-overview.component';
import { ExpenseDetailsComponent } from './expense-details/expense-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'expenses', component: ExpenseOverviewComponent},
  { path: 'expenses/:id', component: ExpenseDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
