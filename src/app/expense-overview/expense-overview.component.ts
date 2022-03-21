import { Component, Input, OnInit } from '@angular/core';
import { Expense } from 'src/Expense';
import { BudgetService } from '../budget.service';


@Component({
  selector: 'app-expense-overview',
  templateUrl: './expense-overview.component.html',
  styleUrls: ['./expense-overview.component.scss']
})
export class ExpenseOverviewComponent implements OnInit {
  @Input() expense!: Expense;
  

  expenses: Expense[] = [];

  getInfoFromService1(){
    this.expenses = this.bservice.getExpenses();
  }

  constructor(private bservice: BudgetService) { }

  ngOnInit(): void {
  }

}
