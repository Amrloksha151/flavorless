export default (targetId) => {
    const EXPENSES = JSON.parse(localStorage.getItem("EXPENSES"));
    const TARGET = document.getElementById(targetId);
    TARGET.innerHTML = '';
    EXPENSES.forEach(expense => {
        TARGET.innerHTML += `\n<tr><td>${EXPENSES.indexOf(expense) + 1}</td><td>${expense.expense}</td><td>${expense.amount}</td><td><button class="remove" data-id="${expense.id}"></button></td></tr>`;
    });
}