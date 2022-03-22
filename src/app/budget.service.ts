import { Injectable, Input } from '@angular/core';
import { Expense } from 'src/Expense';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor() { }

  EXPENSES: Expense[]= [
    {
      id: '1',
      name: 'Jonas',
      amount: '10',
      description: ''
    },
    {
      id: '2',
      name: 'Petras',
      amount: '20',
      description: 'great'
    },
    {
      id: '3',
      name: 'Antanas',
      amount: '30',
      description: 'fine'
    },
  ]

  getExpenses() {
    return this.EXPENSES;
  }

  getExpense(id: string): Expense | undefined {
    return this.EXPENSES.find(item => item.id == id);
  }

}
