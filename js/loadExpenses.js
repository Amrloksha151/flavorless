export default (targetId) => {
    let EXPENSES;
    try {
        EXPENSES = JSON.parse(localStorage.getItem("EXPENSES"));
    } catch (error) {
        return 0;
    }
    const TARGET = document.getElementById(targetId);
    TARGET.innerHTML = '';
    EXPENSES.forEach(expense => {
        TARGET.innerHTML += `\n<tr><td>${EXPENSES.indexOf(expense) + 1}</td><td>${expense.expense}</td><td>${expense.amount}</td><td><button class="remove" data-id="expense_${expense.id}">Remove</button></td></tr>`;
    });
}