// src/app/expense-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ExpenseService, IExpense } from '../services/expense';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar"
@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css'
})
export class ExpenseListComponent {
  expenses: any[] = [];
  isFormVisible = false;
  newExpense = { name: '', amount: 0, category: '', account: '' };
  categories = ['Baby', 'Beauty', 'Bills', 'Car', 'Clothing', 'Education',
    'Electronic', 'Entertainment', 'Food', 'Health', 'Home', 'Insurance',
    'Shopping', 'Social', 'Sport', 'Tax', 'Telephone', 'Transportation'];
  // Example categories
  accounts = ['Savings', 'Cash', 'Card']
  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    // Subscribe to the expenses observable
    this.getAll();
  }

  getAll() {
    
    this.expenseService.getAll().subscribe(expenses => {
      this.expenses = expenses;
    })
  }

  openExpenseForm() {
    this.isFormVisible = true;
  }

  closeExpenseForm() {
    this.isFormVisible = false;
    this.newExpense = { name: '', amount: 0, category: '', account: '' };
  }

  addExpense() {
    if (
      this.newExpense.name &&
      this.newExpense.amount &&
      this.newExpense.category &&
      this.newExpense.account
    ) {
      this.expenseService.addExpense(this.newExpense).subscribe({
        next: () => {
          this.getAll();// refresh list
          this.closeExpenseForm();
        },
        error: (err) => console.error('Error adding expense:', err)
      });
    }
  }

  deleteExpense(expense: IExpense) {
    if (!expense.id) return console.error('Expense has no ID');

    this.expenseService.deleteExpense(expense.id).subscribe({
      next: () => this.getAll(),
      error: (err) => console.error('Error deleting expense:', err)
    });
  }

}