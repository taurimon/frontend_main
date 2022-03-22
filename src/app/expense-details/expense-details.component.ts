import { Component, Input, OnInit } from '@angular/core';
import { Expense } from 'src/Expense';
import { BudgetService } from '../budget.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.scss']
})
export class ExpenseDetailsComponent implements OnInit {
  expense: Expense | null | undefined;
  id: string | null = '';

  constructor(private activatedRoute: ActivatedRoute, private bService: BudgetService) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.expense = this.bService.getExpense(this.id);
    }
  }
}
