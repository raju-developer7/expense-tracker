import { Routes } from '@angular/router';
import { ExpenseListComponent } from './expense-list/expense-list';

export const routes: Routes = [
    { path: '', redirectTo: '/expenses', pathMatch: 'full' },
    { path: 'expenses', component: ExpenseListComponent },

];