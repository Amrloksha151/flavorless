const EXPENSES = [];
class Expense {
    constructor (expense, amount) {
        this.expense = expense;
        this.amount = amount;
        this.id = crypto.randomUUID();
        EXPENSES.push(this);
        localStorage.setItem("EXPENSES", JSON.stringify(EXPENSES));
    }

    remove () {
        EXPENSES = EXPENSES.filter( i => i.id !== this.id);
        localStorage.setItem("EXPENSES", JSON.stringify(EXPENSES));
    }
}

function addExpense() {
    new Expense(document.getElementById("expense").value, Number(document.getElementById("amount").value));
    document.getElementsByTagName('form').reset()
}

export {Expense, EXPENSES, addExpense};