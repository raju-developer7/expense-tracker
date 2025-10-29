using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace expense_tracket_backend.Migrations
{
    /// <inheritdoc />
    public partial class AddCreatedAndModifiedDateToExpense : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "Expenses",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedDate",
                table: "Expenses",
                type: "datetime(6)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "Expenses");

            migrationBuilder.DropColumn(
                name: "ModifiedDate",
                table: "Expenses");
        }
    }
}
