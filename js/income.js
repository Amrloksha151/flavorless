const INCOMES = [];
class Income {
    constructor (source, amount) {
        this.source = source;
        this.amount = amount;
        this.id = crypto.randomUUID();
        INCOMES.push(this);
        localStorage.setItem("INCOMES", JSON.stringify(INCOMES));
    }

    remove () {
        INCOMES = INCOMES.filter( i => i.id !== this.id);
        localStorage.setItem("INCOMES", JSON.stringify(INCOMES));
    }
}

function addIncome() {
    new Income(document.getElementById("source").value, Number(document.getElementById("amount").value));
    document.getElementsByTagName('form').reset()
}

export {Income, addIncome, INCOMES};