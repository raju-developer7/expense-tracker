import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environements/environment';


export interface IExpense {
  id?: number;           // from DB
  name: string;
  amount: number;
  category: string;
  account: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  // private apiUrl = 'http://localhost:7272/api/Expense'; // change if backend URL differs
  private apiUrl = environment.apiUrl; // change if backend URL differs


  constructor(private http: HttpClient) {}

  // 🧩 Load from backend
  getAll(): Observable<IExpense[]> {
    return this.http.get<IExpense[]>(this.apiUrl);
  }

  // ➕ Add new expense
  addExpense(expense: IExpense): Observable<IExpense> {
    return this.http.post<IExpense>(this.apiUrl, expense);
  }

  // 🗑️ Delete expense by ID
  deleteExpense(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
