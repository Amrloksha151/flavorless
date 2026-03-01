let INCOMES = JSON.parse(localStorage.getItem("INCOMES")) || [];
class Income {
    constructor (source, amount) {
        this.source = source;
        this.amount = amount;
        this.id = crypto.randomUUID();
        INCOMES.push(this);
        localStorage.setItem("INCOMES", JSON.stringify(INCOMES));
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const FORM = document.getElementsByTagName('form')[0];
    FORM.addEventListener('submit', event => {
        event.preventDefault();
        new Income(document.getElementById("source").value, Number(document.getElementById("amount").value));
        FORM.reset();
    });
});
export {Income, INCOMES};