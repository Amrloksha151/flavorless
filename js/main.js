import loadIncome from "./loadIncome.js";
import loadExpenses from "./loadExpenses.js";
import { INCOMES } from "./income.js";
import { EXPENSES } from "./expense.js";

function remove (target, id, name) {
    target = target.filter( i => i.id !== id);
    localStorage.setItem(name, JSON.stringify(target));
}

function main() {}

document.addEventListener('DOMContentLoaded', () => {loadIncome("incomes"); loadExpenses("expenses"); main()})