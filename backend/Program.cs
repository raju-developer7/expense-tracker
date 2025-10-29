using expense_tracket_backend.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Connect to MySQL
builder.Services.AddDbContext<ExpenseDbContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        new MySqlServerVersion(new Version(8, 0, 36))
        //ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("AivenDb"))
    )
);

// Allow Angular CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular",
         policy =>
         {
             policy.WithOrigins("https://localhost:4200")
                   .AllowAnyOrigin()
                   .AllowAnyHeader()
                   .AllowAnyMethod();
         });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseCors("AllowAngular");

app.UseAuthorization();

app.UseStaticFiles(); // 👈 enables serving frontends
app.UseRouting();
app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("index.html");

app.Run();
