let EXPENSES = JSON.parse(localStorage.getItem("EXPENSES")) || [];
class Expense {
    constructor (expense, amount) {
        this.expense = expense;
        this.amount = amount;
        this.id = crypto.randomUUID();
        EXPENSES.push(this);
        localStorage.setItem("EXPENSES", JSON.stringify(EXPENSES));
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const FORM = document.getElementsByTagName('form')[0];
    FORM.addEventListener('submit', event => {
        event.preventDefault();
        new Expense(document.getElementById("expense").value, Number(document.getElementById("amount").value));
        FORM.reset();
    });
});
export {Expense, EXPENSES};