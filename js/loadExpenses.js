export default (targetId) => {
    let EXPENSES = JSON.parse(localStorage.getItem("EXPENSES")) || [];
    const TARGET = document.getElementById(targetId);
    TARGET.innerHTML = '';
    EXPENSES.forEach(expense => {
        TARGET.innerHTML += `\n<tr><td>${EXPENSES.indexOf(expense) + 1}</td><td>${expense.expense}</td><td>${expense.amount}</td><td><button class="remove" data-id="EXPENSES_${expense.id}">Remove</button></td></tr>`;
    });
}