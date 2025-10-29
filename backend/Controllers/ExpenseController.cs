using Microsoft.AspNetCore.Mvc;
using expense_tracket_backend.Data;
using expense_tracket_backend.Models;
using Microsoft.EntityFrameworkCore;


namespace expense_tracket_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExpenseController : ControllerBase
    {
        private readonly ExpenseDbContext _context;

        public ExpenseController(ExpenseDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var expenses = await _context.Expenses.ToListAsync();
            return Ok(expenses);
        }

        [HttpPost]
        public async Task<IActionResult> AddExpense(Expense expense)
        {
            expense.CreatedDate = DateTime.Now;
            expense.ModifiedDate = null;

            _context.Expenses.Add(expense);
            await _context.SaveChangesAsync();
            return Ok(expense);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateExpense(int id, Expense expense)
        {
            var existingExpense = await _context.Expenses.FindAsync(id);
            if (existingExpense == null)
                return NotFound();

            existingExpense.Category = expense.Category;
            existingExpense.Amount = expense.Amount;
            //existingExpense.Description = expense.Description;
            existingExpense.ModifiedDate = DateTime.Now; // Update timestamp

            await _context.SaveChangesAsync();

            return Ok(existingExpense);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExpense(int id)
        {
            var expense = await _context.Expenses.FindAsync(id);
            if (expense == null) return NotFound();

            _context.Expenses.Remove(expense);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
