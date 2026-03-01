import loadIncome from "./loadIncome.js";
import loadExpenses from "./loadExpenses.js";
import renderNumber from "./renderArt.js";
import { INCOMES } from "./income.js";
import { EXPENSES } from "./expense.js";

function remove (target, id, name) {
    target = target.filter( i => i.id !== id);
    localStorage.setItem(name, JSON.stringify(target));
    main();
}

function calculateBalance() {
    let balance = 0;
    if (INCOMES || EXPENSES) {
        INCOMES.forEach(income => {
            balance += income.amount;
        });
        EXPENSES.forEach(expense => {
            balance -= expense.amount;
        });
        if (balance < 0) {
            return 0;
        }
        return balance;
    } else {
        return 0;
    }
}

function main() {
    loadIncome("incomes"); loadExpenses("expenses"); 
    Array.from(document.getElementsByClassName('remove')).forEach(element => {
        element.addEventListener('click', () => {
            let [target, id] = element.dataset.id.split("_");
            const targets = {INCOMES, EXPENSES};
            remove(targets[target], id, target)
        })
    });
    renderNumber(calculateBalance(), "balance");
}

document.addEventListener('DOMContentLoaded', () => {main()})