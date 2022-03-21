import { Injectable, Input } from '@angular/core';
import { Expense } from 'src/Expense';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor() { }

  EXPENSES: Expense[]= [
    {
      id: 1,
      name: 'Jonas',
      amount: '10'
    },
    {
      id: 2,
      name: 'Petras',
      amount: '20'
    },
    {
      id: 3,
      name: 'Antanas',
      amount: '30'
    },
  ]

  getExpenses() {
    return this.EXPENSES;
  }

}
