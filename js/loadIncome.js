export default (targetId) => {
    let INCOMES = JSON.parse(localStorage.getItem("INCOMES")) || [];
    const TARGET = document.getElementById(targetId);
    TARGET.innerHTML = '';
    INCOMES.forEach(income => {
        TARGET.innerHTML += `\n<tr><td>${INCOMES.indexOf(income) + 1}</td><td>${income.source}</td><td>${income.amount}</td><td><button class="remove" data-id="INCOMES_${income.id}">Remove</button></td></tr>`;
    });
}